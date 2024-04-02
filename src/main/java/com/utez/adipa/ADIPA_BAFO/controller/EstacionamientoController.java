package com.utez.adipa.ADIPA_BAFO.controller;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.dto.EstacionamientoDto;
import com.utez.adipa.ADIPA_BAFO.services.EstacionamientoService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
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

    @GetMapping("/docencia/{docencia_ubi}")
    public ResponseEntity<ApiResponse> findByDocencia(@PathVariable String docencia_ubi){
        return service.findByDocencia(docencia_ubi);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> findById(@PathVariable Long id){
        return service.findById(id);
    }

    @PutMapping("/")
    public ResponseEntity<ApiResponse> update(@RequestBody EstacionamientoDto estacionamientoDto){
        try {
            service.update(estacionamientoDto);
            return new ResponseEntity<>(new ApiResponse(estacionamientoDto, HttpStatus.OK), HttpStatus.OK);
        } catch (RuntimeException runtimeException){
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, runtimeException.getMessage()), HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> delete(@PathVariable Long id){
        try {
            service.delete(id);
            return new ResponseEntity<>(new ApiResponse(id, HttpStatus.OK), HttpStatus.OK);
        } catch (EntityNotFoundException e){
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, e.getMessage()), HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ApiResponse> changeStatus(@PathVariable("id") Long id, @RequestBody EstacionamientoDto estacionamientoDto){
        return service.changeStatus(id, estacionamientoDto);
    }
}
