package com.utez.adipa.ADIPA_BAFO.model.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class DocenteDto {

    private Long id_docente;
    private String area_aca;

    private Long persona_id;
}
