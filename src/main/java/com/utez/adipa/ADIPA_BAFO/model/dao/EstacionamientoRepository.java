package com.utez.adipa.ADIPA_BAFO.model.dao;

import com.utez.adipa.ADIPA_BAFO.model.entity.Estacionamiento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstacionamientoRepository extends JpaRepository<Estacionamiento, Long> {
}
