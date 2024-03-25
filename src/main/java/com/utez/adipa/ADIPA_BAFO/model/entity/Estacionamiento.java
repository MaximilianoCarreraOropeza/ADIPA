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
@Table(name = "estacionamiento")
public class Estacionamiento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_estacionamiento")
    private Long estacionamiento_id;
    @Column(name = "num_slot", nullable = false)
    private String num_slot;
    @Column(name = "docencia_ubi", nullable = false)
    private String docencia_ubi;
    @Column(name = "status", nullable = false)
    private Byte status;
}
