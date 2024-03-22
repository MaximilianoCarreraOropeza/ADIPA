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
@Table(name = "estudiante")
public class Estudiante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_estudiante;
    @Column(name = "carrera", nullable = false)
    private String carrera;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "persona_id")
    private Persona persona;
}
