package com.utez.adipa.ADIPA_BAFO.controller;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.services.PersonaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/adipa/persona")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PersonaController {

    private final PersonaService service;

    public PersonaController(PersonaService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> getById(Long id){
        return service.findById(id);
    }
}
