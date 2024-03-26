package com.utez.adipa.ADIPA_BAFO.controller;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.dto.UsuarioDto;
import com.utez.adipa.ADIPA_BAFO.services.UsuarioService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
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

}
