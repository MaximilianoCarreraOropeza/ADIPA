package com.utez.adipa.ADIPA_BAFO.controller;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.dto.EmailDto;
import com.utez.adipa.ADIPA_BAFO.services.IEmailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/adipa")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EmailController {

    private final IEmailService emailService;

    public EmailController(IEmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send-email")
    private ResponseEntity<ApiResponse> sendEmail(@RequestBody EmailDto email) {
        try{
            emailService.enviarCorreo(email);
            return new ResponseEntity<>(new ApiResponse(email, HttpStatus.OK), HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND,true, e.getMessage()), HttpStatus.NOT_FOUND);
        }

    }
}
