package com.utez.adipa.ADIPA_BAFO.services;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.dao.EstacionamientoRepository;
import com.utez.adipa.ADIPA_BAFO.model.dto.EstacionamientoDto;
import com.utez.adipa.ADIPA_BAFO.model.entity.Estacionamiento;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class EstacionamientoService {

    private final EstacionamientoRepository repository;

    public EstacionamientoService(EstacionamientoRepository repository) {
        this.repository = repository;
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<ApiResponse> save(Estacionamiento estacionamiento){
        try {
            Estacionamiento saveEstacionamiento = repository.save(estacionamiento);
                return new ResponseEntity<>(new ApiResponse(saveEstacionamiento, HttpStatus.OK), HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse(HttpStatus.INTERNAL_SERVER_ERROR, false, "Error al guardar el estacionamiento" + e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Transactional
    public ResponseEntity<ApiResponse> findAll(){
        return new ResponseEntity<>(new ApiResponse(repository.findAll(), HttpStatus.OK), HttpStatus.OK);
    }

    @Transactional
    public ResponseEntity<ApiResponse> findByDocencia(String docencia_ubi){
        List<Object[]> foundDocencia = repository.findByDocencia_ubi(docencia_ubi);
        if(foundDocencia.isEmpty()){
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, "DocenciaNotFound"), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(new ApiResponse(foundDocencia.stream().map(obj -> new Estacionamiento(
                (Long) obj[0], (String) obj[1], (String) obj[2], (Byte) obj[3]))
                .collect(Collectors.toList()), HttpStatus.OK), HttpStatus.OK);
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<ApiResponse> update(EstacionamientoDto estacionamientoDto){
        Estacionamiento foundEstacionamiento = repository.findById(estacionamientoDto.getId_estacionamiento()).orElseThrow(() -> new RuntimeException("EstacionamientoNotFound"));

        foundEstacionamiento.setEstacionamiento_id(estacionamientoDto.getId_estacionamiento());
        foundEstacionamiento.setDocencia_ubi(estacionamientoDto.getDocencia_ubi());
        foundEstacionamiento.setNum_slot(estacionamientoDto.getNum_slot());
        foundEstacionamiento.setStatus(estacionamientoDto.getStatus());

        repository.saveAndFlush(foundEstacionamiento);

        return new ResponseEntity<>(new ApiResponse(foundEstacionamiento, HttpStatus.OK), HttpStatus.OK);
    }

    @Transactional(rollbackFor = {SQLException.class})
    public void delete(Long id){
        Optional<Estacionamiento> foundEstacionamiento = repository.findById(id);
        if (foundEstacionamiento.isPresent()){
            repository.deleteById(id);
        } else {
            throw new EntityNotFoundException("EstacionamientoNotFound");
        }

    }
}
