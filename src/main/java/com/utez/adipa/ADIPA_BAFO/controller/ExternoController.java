package com.utez.adipa.ADIPA_BAFO.controller;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.dto.ExternoDto;
import com.utez.adipa.ADIPA_BAFO.services.ExternoService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/adipa/externo")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ExternoController {

    private final ExternoService service;

    public ExternoController(ExternoService service) {
        this.service = service;
    }

    @PostMapping("/")
    public ResponseEntity<ApiResponse> create(@Valid @RequestBody ExternoDto externoDto){
        return service.save(externoDto.toEntity());
    }

    @GetMapping("/")
    public ResponseEntity<ApiResponse> getAll(){
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> findById(@PathVariable Long id){
        return service.findById(id);
    }

    @PutMapping("/")
    public ResponseEntity<ApiResponse> update(@RequestBody ExternoDto externoDto){
        try {
            service.update(externoDto);
            return new ResponseEntity<>(new ApiResponse(externoDto, HttpStatus.OK), HttpStatus.OK);
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
}
