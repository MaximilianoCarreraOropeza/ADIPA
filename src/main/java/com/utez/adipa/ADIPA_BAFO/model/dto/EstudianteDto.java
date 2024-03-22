package com.utez.adipa.ADIPA_BAFO.model.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class EstudianteDto {

    private Long id_estudiante;
    private String carrera;

    private Long persona_id;
}
