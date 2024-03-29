package com.utez.adipa.ADIPA_BAFO.model.dto;

import com.utez.adipa.ADIPA_BAFO.model.entity.Estacionamiento;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class EstacionamientoDto {

    private Long id_estacionamiento;
    private String num_slot;
    private String docencia_ubi;
    private Byte status;

    public Estacionamiento toEntity(){
        return new Estacionamiento(id_estacionamiento, num_slot, docencia_ubi, status);
    }

}
