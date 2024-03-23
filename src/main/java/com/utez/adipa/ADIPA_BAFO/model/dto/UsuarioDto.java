package com.utez.adipa.ADIPA_BAFO.model.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class UsuarioDto {

    private Long id_usuario;
    private String matricula;
    private String contrasena;

    private Long tipo_id;
}
