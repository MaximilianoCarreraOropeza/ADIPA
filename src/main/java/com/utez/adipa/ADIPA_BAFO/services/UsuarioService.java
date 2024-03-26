package com.utez.adipa.ADIPA_BAFO.services;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.dao.UsuarioRepository;
import com.utez.adipa.ADIPA_BAFO.model.dto.UsuarioDto;
import com.utez.adipa.ADIPA_BAFO.model.entity.Usuario;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;
import java.util.Optional;

@Service
@Transactional
public class UsuarioService {
    private final UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public Optional<Usuario> findUserByMatricula(String username){
        return repository.findByMatricula(username);
    }

    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> findAll() {
        return new ResponseEntity<>(new ApiResponse(repository.findAll(), HttpStatus.OK), HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> findBydId(Long id){
        Optional<Usuario> foundUser = repository.findById(id);
        if(foundUser.isEmpty()){
            return new ResponseEntity<>(new ApiResponse(HttpStatus.BAD_REQUEST, true, "UserNotFound"), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(new ApiResponse(foundUser.get(), HttpStatus.OK), HttpStatus.OK);
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<ApiResponse> changeContrasena(Long id, UsuarioDto usuarioDto, PasswordEncoder passwordEncoder) {
        Optional<Usuario> foundUsuario = repository.findById(id);
        if (foundUsuario.isEmpty()) {
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, "UserNotFound"), HttpStatus.BAD_REQUEST);
        }
        Usuario usuario = foundUsuario.get();
        String encryptedPassword = passwordEncoder.encode(usuarioDto.getContrasena());
        usuario.setContrasena(encryptedPassword);

        return new ResponseEntity<>(new ApiResponse(repository.save(usuario), HttpStatus.OK), HttpStatus.OK);
    }

}
