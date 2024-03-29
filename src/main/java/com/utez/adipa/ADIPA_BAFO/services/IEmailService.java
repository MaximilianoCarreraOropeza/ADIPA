package com.utez.adipa.ADIPA_BAFO.services;

import com.utez.adipa.ADIPA_BAFO.model.dto.EmailDto;
import jakarta.mail.MessagingException;

public interface IEmailService {

    void enviarCorreo(EmailDto emailDto);

    public void sendMail(EmailDto emailDto) throws MessagingException;
}
