package com.utez.adipa.ADIPA_BAFO.controller;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.dto.EmailDto;
import com.utez.adipa.ADIPA_BAFO.services.IEmailService;
import jakarta.mail.MessagingException;
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
    private ResponseEntity<ApiResponse> sendEmail(@RequestBody EmailDto email) throws MessagingException {
        try{
            emailService.enviarCorreo(email);
            return new ResponseEntity<>(new ApiResponse(HttpStatus.OK, false, "Correo enviado exitosamente"), HttpStatus.OK);
        } catch (RuntimeException runtimeException){
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND,true, runtimeException.getMessage()), HttpStatus.NOT_FOUND);
        }

    }
}
