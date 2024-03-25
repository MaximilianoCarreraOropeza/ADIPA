package com.utez.adipa.ADIPA_BAFO.model.dao;

import com.utez.adipa.ADIPA_BAFO.model.entity.Estacionamiento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface EstacionamientoRepository extends JpaRepository<Estacionamiento, Long> {
    @Modifying
    @Query(value = "SELECT id_estacionamiento, docencia_ubi, num_slot, status FROM estacionamiento WHERE docencia_ubi = :docencia_ubi", nativeQuery = true)
    List<Object[]> findByDocencia_ubi(String docencia_ubi);
}
