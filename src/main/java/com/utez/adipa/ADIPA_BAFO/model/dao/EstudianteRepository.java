package com.utez.adipa.ADIPA_BAFO.model.dao;

import com.utez.adipa.ADIPA_BAFO.model.entity.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface EstudianteRepository extends JpaRepository<Estudiante, Long> {
    @Modifying
    @Query(value = "INSERT INTO estudiante (id_estudiante, persona_id, carrera) VALUES (:id_estudiante, :persona_id, :carrera)", nativeQuery = true)
    int saveEstudiante(@Param("id_estudiante") Long id_estudiante, @Param("persona_id") Long persona_id, @Param("carrera") String carrera);
}
