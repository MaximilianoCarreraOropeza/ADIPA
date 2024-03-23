package com.utez.adipa.ADIPA_BAFO.model.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class TipoUsuarioDto {

    private Long id_tipo;
    private String nombre;
}
