package com.utez.adipa.ADIPA_BAFO.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(name = "externo")
public class Externo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_externo")
    private Long id_externo;
    @Column(name = "usuario", nullable = false)
    private String usuario;
    @Column(name = "contrasena", nullable = false)
    private String contrasena;
    @Column(name = "nombre1", nullable = false)
    private String nombre1;
    @Column(name = "nombre2", nullable = true)
    private String nombre2;
    @Column(name = "apellido_p", nullable = false)
    private String apellido_p;
    @Column(name = "apellido_m", nullable = false)
    private String apellido_m;
}
