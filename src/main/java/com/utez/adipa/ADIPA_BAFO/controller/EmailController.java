package com.utez.adipa.ADIPA_BAFO.controller;

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
    private ResponseEntity<String> sendEmail(@RequestBody EmailDto email) throws MessagingException {
            emailService.enviarCorreo(email);
            return new ResponseEntity<>("Correo enviado exitosamente", HttpStatus.OK);
    }
}
