package com.utez.adipa.ADIPA_BAFO.model.dto;

import com.utez.adipa.ADIPA_BAFO.model.entity.Usuario;
import lombok.Value;


@Value
public class SignedDto {
    String token;
    String tokenType;
    Usuario usuario;
    Long personas;
}
