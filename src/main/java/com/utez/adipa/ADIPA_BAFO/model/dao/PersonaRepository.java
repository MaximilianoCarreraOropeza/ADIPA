package com.utez.adipa.ADIPA_BAFO.model.dao;

import com.utez.adipa.ADIPA_BAFO.model.entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface PersonaRepository extends JpaRepository<Persona, Long> {
    @Modifying
    @Query(value = "INSERT INTO persona (id_persona, nombre, apellido_p, apellido_m) VALUES (:id_persona, :nombre, :apellido_p, :apellido_m)", nativeQuery = true)
    int savePerson(@Param("id_persona") Long id_persona, @Param("nombre") String nombre, @Param("apellido_p") String apellido_p, @Param("apellido_m") String apellido_m);
}