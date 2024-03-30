package com.utez.adipa.ADIPA_BAFO.controller;

import com.utez.adipa.ADIPA_BAFO.model.entity.WSMensaje;
import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;

@Controller
@ControllerAdvice
public class WSController {

    @MessageMapping("/envio")
    @SendTo("/tema/mensajes")
    public WSMensaje envio(WSMensaje mensaje) {
        return new WSMensaje(mensaje.nombre(), mensaje.contenido());
    }

    @MessageExceptionHandler
    @SendTo("/queue/errors")
    public String handleException(Exception e){
        return "Ocurrio un error al procesar la solicitud: " + e.getMessage();
    }
}
