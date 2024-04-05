package com.utez.adipa.ADIPA_BAFO.controller;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.entity.Firebase;
import com.utez.adipa.ADIPA_BAFO.services.FirebaseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/adipa/firebase")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FirebaseController {

    private final FirebaseService service;

    public FirebaseController(FirebaseService service) {
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<ApiResponse> getAllFirebase() {
        try {
            return new ResponseEntity<>(new ApiResponse(service.getAllEstacionamientos(), HttpStatus.OK), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, e.getMessage()), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/")
    public ResponseEntity<ApiResponse> getIdFirebase(@RequestParam String id_estacionamiento) {
        try {
            return new ResponseEntity<>(new ApiResponse(service.getIdEstacionamiento(id_estacionamiento), HttpStatus.OK), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, e.getMessage()), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/")
    public ResponseEntity<ApiResponse> saveFirebase(@RequestBody Firebase firebase){
        try {
            return new ResponseEntity<>(new ApiResponse(service.saveEstacionamiento(firebase), HttpStatus.OK), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, e.getMessage()), HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/")
    public ResponseEntity<ApiResponse> updateFirebase(@RequestBody Firebase firebase) {
        try {
            return new ResponseEntity<>(new ApiResponse(service.updateEstacionamiento(firebase), HttpStatus.OK), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, e.getMessage()), HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/")
    public ResponseEntity<ApiResponse> deteleFirebase(@RequestParam String id_estacionamiento){
        try {
            return new ResponseEntity<>(new ApiResponse(service.deleteEstacionamiento(id_estacionamiento), HttpStatus.OK), HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, "IDNotFound"), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/docencia")
    public ResponseEntity<ApiResponse> getEstacionamientosByDocenciaUbi(@RequestParam String docencia_ubi) {
        try {
            return new ResponseEntity<>(new ApiResponse(service.getEstacionamientosByDocenciaUbi(docencia_ubi), HttpStatus.OK), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, e.getMessage()), HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping("/{id_estacionamiento}/status")
    public ResponseEntity<ApiResponse> updateStatus(@PathVariable String id_estacionamiento, @RequestParam boolean newStatus) {
        try {
            return new ResponseEntity<>(new ApiResponse(service.updateStatus(id_estacionamiento, newStatus), HttpStatus.OK), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, e.getMessage()), HttpStatus.NOT_FOUND);
        }
    }



}
