package com.utez.adipa.ADIPA_BAFO.services;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.dao.ExternoRepository;
import com.utez.adipa.ADIPA_BAFO.model.dto.ExternoDto;
import com.utez.adipa.ADIPA_BAFO.model.entity.Externo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;
import java.util.Optional;

@Service
public class ExternoService {

    private final ExternoRepository repository;

    public ExternoService(ExternoRepository repository) {
        this.repository = repository;
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<ApiResponse> save(Externo externo){
        try {
            Externo saveExterno = repository.save(externo);
            return new ResponseEntity<>(new ApiResponse(saveExterno, HttpStatus.OK), HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(new ApiResponse(HttpStatus.INTERNAL_SERVER_ERROR, true, "Error al guardar al Externo" + e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> findAll(){
        return new ResponseEntity<>(new ApiResponse(repository.findAll(), HttpStatus.OK), HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> findById(Long id){
        Optional<Externo> foundExterno = repository.findById(id);
        if(foundExterno.isPresent()){
            return new ResponseEntity<>(new ApiResponse(foundExterno, HttpStatus.OK), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, "ExternoNotFound"), HttpStatus.NOT_FOUND);
        }
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<ApiResponse> update(ExternoDto externoDto){
        Externo foundExterno = repository.findById(externoDto.getId_externo()).orElseThrow(() -> new RuntimeException("ExternoNotFound"));

        foundExterno.setId_externo(externoDto.getId_externo());
        foundExterno.setUsuario(externoDto.getUsuario());
        foundExterno.setContrasena(externoDto.getContrasena());
        foundExterno.setNombre1(externoDto.getNombre1());
        foundExterno.setNombre2(externoDto.getNombre2());
        foundExterno.setApellido_p(externoDto.getApellido_p());
        foundExterno.setApellido_m(externoDto.getApellido_m());

        repository.saveAndFlush(foundExterno);

        return new ResponseEntity<>(new ApiResponse(foundExterno, HttpStatus.OK), HttpStatus.OK);
    }

    @Transactional(rollbackFor = {SQLException.class})
    public void delete(Long id){
        Optional<Externo> foundExterno = repository.findById(id);
        if(foundExterno.isPresent()){
            repository.deleteById(id);
        } else {
            throw new EntityNotFoundException("ExternoNotFound");
        }
    }
}
