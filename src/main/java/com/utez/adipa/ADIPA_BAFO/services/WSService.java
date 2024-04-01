package com.utez.adipa.ADIPA_BAFO.services;

import com.utez.adipa.ADIPA_BAFO.model.entity.WSMensaje;
import org.springframework.stereotype.Service;

@Service
public class WSService {

    public void procesarMensaje(WSMensaje mensaje) {
        System.out.println("Procesando mensaje: " + mensaje.toString());
    }
}
