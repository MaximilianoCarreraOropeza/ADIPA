package com.utez.adipa.ADIPA_BAFO.model.dao;

import com.utez.adipa.ADIPA_BAFO.model.entity.Docente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface DocenteRepository extends JpaRepository<Docente, Long> {
    @Modifying
    @Query(value = "INSERT INTO docente (id_docente, persona_id, area_aca) VALUES (:id_docente, :persona_id, :area_aca)", nativeQuery = true)
    int saveDocente(@Param("id_docente") Long id_docente, @Param("persona_id") Long persona_id, @Param("area_aca") String area_aca);
}
