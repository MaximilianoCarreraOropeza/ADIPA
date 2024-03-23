package com.utez.adipa.ADIPA_BAFO.services;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.dao.EstacionamientoRepository;
import com.utez.adipa.ADIPA_BAFO.model.entity.Estacionamiento;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;


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

    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> findAll(){
        return new ResponseEntity<>(new ApiResponse(repository.findAll(), HttpStatus.OK), HttpStatus.OK);
    }



}
