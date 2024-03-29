package com.utez.adipa.ADIPA_BAFO.controller;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.dto.EstacionamientoDto;
import com.utez.adipa.ADIPA_BAFO.services.EstacionamientoService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/adipa/estacionamiento")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EstacionamientoController {

    private final EstacionamientoService service;

    public EstacionamientoController(EstacionamientoService service) {
        this.service = service;
    }

    @PostMapping("/")
    public ResponseEntity<ApiResponse> create(@Valid @RequestBody EstacionamientoDto dto){
        return service.save(dto.toEntity());
    }

    @GetMapping("/")
    public ResponseEntity<ApiResponse> getAll() {
        return service.findAll();
    }

    @GetMapping("/{docencia_ubi}")
    public ResponseEntity<ApiResponse> findByDocencia(@PathVariable String docencia_ubi){
        return service.findByDocencia(docencia_ubi);
    }
}