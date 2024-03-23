package com.utez.adipa.ADIPA_BAFO.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(name = "tipo_usuario")
public class TipoUsuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_tipo")
    private Long id_tipo;
    @Column(name = "nombre", nullable = false)
    private String nombre;

    @OneToMany(fetch =  FetchType.LAZY, mappedBy = "tipoUsuario")
    @JsonIgnore
    private Set<Usuario> usuarios;

}
