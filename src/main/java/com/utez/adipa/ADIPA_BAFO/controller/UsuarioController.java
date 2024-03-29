package com.utez.adipa.ADIPA_BAFO.controller;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.dto.UsuarioDto;
import com.utez.adipa.ADIPA_BAFO.services.UsuarioService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/adipa/usuario")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioService service;
    private final PasswordEncoder passwordEncoder;
    @GetMapping("/")
    public ResponseEntity<ApiResponse> getAll(){
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> getById(@PathVariable("id") Long id){
        return service.findBydId(id);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ApiResponse> changeContrasena(@PathVariable("id") Long id, @RequestBody UsuarioDto usuarioDto) {
        return service.changeContrasena(id, usuarioDto, passwordEncoder);
    }

    @PostMapping("/")
    public ResponseEntity<ApiResponse> save(@RequestBody UsuarioDto usuarioDto){
        return service.register(usuarioDto, passwordEncoder);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> detele(@PathVariable Long id){
        try {
            service.delete(id);
            return new ResponseEntity<>(new ApiResponse(id, HttpStatus.OK), HttpStatus.OK);
        } catch (EntityNotFoundException exception){
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, exception.getMessage()), HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> update(@PathVariable Long id, @RequestBody UsuarioDto usuarioDto){
        try {
            service.update(id, usuarioDto, passwordEncoder);
            return new ResponseEntity<>(new ApiResponse(usuarioDto, HttpStatus.OK), HttpStatus.OK);
        } catch (RuntimeException runtimeException){
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, runtimeException.getMessage()), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/matricula/{matricula}")
    public ResponseEntity<ApiResponse> findByMat(@PathVariable String matricula) {
        return service.findUserByMat(matricula);
    }
}
