package com.utez.adipa.ADIPA_BAFO.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(name = "persona")
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_persona")
    private Long id_persona;
    @Column(name = "nombre1", nullable = false)
    private String nombre1;
    @Column(name = "nombre2", nullable = true)
    private String nombre2;
    @Column(name = "apellido_p", nullable = false)
    private String apellido_p;
    @Column(name = "apellido_m", nullable = false)
    private String apellido_m;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "usuario_id")
    @JsonIgnore
    private Usuario usuario;

}
