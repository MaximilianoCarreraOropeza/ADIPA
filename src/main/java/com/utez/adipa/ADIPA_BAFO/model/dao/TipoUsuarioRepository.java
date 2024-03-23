package com.utez.adipa.ADIPA_BAFO.model.dao;

import com.utez.adipa.ADIPA_BAFO.model.entity.TipoUsuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TipoUsuarioRepository extends JpaRepository<TipoUsuario, Long> {

    @Modifying
    @Query(value = "INSERT INTO tipo_usuario (id_tipo, nombre) VALUES (:id_tipo, :nombre)", nativeQuery = true)
    int saveRole(@Param("id_tipo") Long id_tipo, @Param("nombre") String nombre);
}
