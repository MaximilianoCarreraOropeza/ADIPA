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
@Table(name = "docente")
public class Docente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_docente")
    private Long id_docente;
    @Column(name = "area_aca", nullable = false)
    private String area_aca;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "persona_id")
    private Persona persona;

}
