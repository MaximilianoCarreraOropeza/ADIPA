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
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Long id_usuario;
    @Column(name = "matricula", nullable = false)
    private String matricula;
    @Column(name = "contrasena", nullable = false)
    private String contrasena;

    @OneToOne(cascade = CascadeType.PERSIST, mappedBy = "usuario")
    private Persona persona;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tipo_id")
    private TipoUsuario tipoUsuario;

}
