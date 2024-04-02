package com.utez.adipa.ADIPA_BAFO.services;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.dao.PersonaRepository;
import com.utez.adipa.ADIPA_BAFO.model.dao.UsuarioRepository;
import com.utez.adipa.ADIPA_BAFO.model.dto.PersonaDto;
import com.utez.adipa.ADIPA_BAFO.model.entity.Persona;
import com.utez.adipa.ADIPA_BAFO.model.entity.Usuario;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;
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

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<ApiResponse> register(PersonaDto personaDto){
        Optional<Usuario> foundUsuario = usuarioRepository.findById(personaDto.getUsuario_id());

        if (foundUsuario.isPresent()) {
            Usuario usuario = foundUsuario.get();

            Persona persona = new Persona();
            persona.setId_persona(personaDto.getId_persona());
            persona.setNombre1(personaDto.getNombre1());
            persona.setNombre2(personaDto.getNombre2());
            persona.setApellido_p(personaDto.getApellido_p());
            persona.setApellido_m(personaDto.getApellido_m());
            persona.setUsuario(usuario);

            repository.save(persona);

            return new ResponseEntity<>(new ApiResponse(persona, HttpStatus.OK), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, "UsuarioNotFound"), HttpStatus.NOT_FOUND);
        }
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<ApiResponse> update(PersonaDto personaDto){
        Usuario foundUsuario = usuarioRepository.findById(personaDto.getUsuario_id()).orElseThrow(() -> new RuntimeException("UsuarioNotFound"));
        Persona foundPersona = repository.findById(personaDto.getId_persona()).orElseThrow(() -> new RuntimeException("PersonaNotFound"));

        foundPersona.setId_persona(personaDto.getId_persona());
        foundPersona.setNombre1(personaDto.getNombre1());
        foundPersona.setNombre2(personaDto.getNombre2());
        foundPersona.setApellido_p(personaDto.getApellido_p());
        foundPersona.setApellido_m(personaDto.getApellido_m());
        foundPersona.setUsuario(foundUsuario);

        repository.saveAndFlush(foundPersona);

        return new ResponseEntity<>(new ApiResponse(foundPersona, HttpStatus.OK), HttpStatus.OK);
    }



}
