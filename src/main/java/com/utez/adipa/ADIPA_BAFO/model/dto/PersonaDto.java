package com.utez.adipa.ADIPA_BAFO.model.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class PersonaDto {

    private Long id_persona;
    private String nombre1;
    private String nombre2;
    private String apellido_p;
    private String apellido_m;

    private Long usuario_id;

}
