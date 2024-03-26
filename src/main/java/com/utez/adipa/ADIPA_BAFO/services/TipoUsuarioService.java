package com.utez.adipa.ADIPA_BAFO.services;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.dao.TipoUsuarioRepository;
import com.utez.adipa.ADIPA_BAFO.model.entity.TipoUsuario;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Service
public class TipoUsuarioService {

    private final TipoUsuarioRepository repository;

    public TipoUsuarioService(TipoUsuarioRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> finAll(){
        return new ResponseEntity<>(new ApiResponse(repository.findAll(), HttpStatus.OK), HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> findById(Long id){
        Optional<TipoUsuario> foundTipo = repository.findById(id);
        if (foundTipo.isEmpty()){
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, "TipoUsuarioNotFound"), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(new ApiResponse(foundTipo, HttpStatus.OK), HttpStatus.OK);
    }

}
