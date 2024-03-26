package com.utez.adipa.ADIPA_BAFO.services;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.dao.PersonaRepository;
import com.utez.adipa.ADIPA_BAFO.model.dao.UsuarioRepository;
import com.utez.adipa.ADIPA_BAFO.model.dto.PersonaDto;
import com.utez.adipa.ADIPA_BAFO.model.dto.UsuarioDto;
import com.utez.adipa.ADIPA_BAFO.model.entity.Persona;
import com.utez.adipa.ADIPA_BAFO.model.entity.Usuario;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Service
public class PersonaService {

    private final PersonaRepository repository;
    private final UsuarioRepository usuarioRepository;

    public PersonaService(PersonaRepository repository, UsuarioRepository usuarioRepository) {
        this.repository = repository;
        this.usuarioRepository = usuarioRepository;
    }

    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> findById(Long id){
        Optional<Persona> foundPersona = repository.findById(id);
        if (foundPersona.isEmpty()){
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, "PersonaNotFound"), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(new ApiResponse(foundPersona, HttpStatus.OK), HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> findAll(){
        return new ResponseEntity<>(new ApiResponse(repository.findAll(), HttpStatus.OK), HttpStatus.OK);
    }


}
