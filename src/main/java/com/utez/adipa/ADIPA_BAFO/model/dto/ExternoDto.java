package com.utez.adipa.ADIPA_BAFO.model.dto;

import com.utez.adipa.ADIPA_BAFO.model.entity.Externo;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class ExternoDto {

    private Long id_externo;
    private String usuario;
    private String contrasena;
    private String nombre1;
    private String nombre2;
    private String apellido_p;
    private String apellido_m;

    public Externo toEntity(){
        return new Externo(id_externo, usuario, contrasena, nombre1, nombre2, apellido_p, apellido_m);
    }
}
