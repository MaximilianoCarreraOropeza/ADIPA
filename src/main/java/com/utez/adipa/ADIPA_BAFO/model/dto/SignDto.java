package com.utez.adipa.ADIPA_BAFO.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class SignDto {
    @NotBlank
    @NotEmpty
    private String matricula;
    @NotBlank
    @NotEmpty
    private String contrasena;
}
