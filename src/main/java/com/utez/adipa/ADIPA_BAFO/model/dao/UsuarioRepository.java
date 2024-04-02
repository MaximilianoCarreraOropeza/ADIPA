package com.utez.adipa.ADIPA_BAFO.model.dao;

import com.utez.adipa.ADIPA_BAFO.model.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    @Modifying
    @Query(value = "INSERT INTO usuario (id_usuario, tipo_id, matricula, contrasena) VALUES (:id_usuario, :tipo_id, :matricula, :contrasena)", nativeQuery = true)
    int saveUsuario(@Param("id_usuario") Long id_usuario, @Param("tipo_id") Long tipo_id, @Param("matricula") String matricula, @Param("contrasena") String contrasena);

    Optional<Usuario> findByMatricula(String username);
    @Modifying
    @Query(value = "SELECT Usuario.id_usuario, Usuario.tipo_id, Usuario.contrasena, Usuario.matricula, Persona.id_persona, Persona.usuario_id, Persona.nombre1, Persona.nombre2,Persona.apellido_p, Persona.apellido_m, Tipo_Usuario.id_tipo, Tipo_Usuario.nombre " +
            "FROM Usuario " +
            "JOIN Persona ON Usuario.id_usuario = Persona.usuario_id " +
            "JOIN Tipo_Usuario ON Usuario.tipo_id = Tipo_Usuario.id_tipo " +
            "WHERE Usuario.matricula = :matricula", nativeQuery = true)
    List<Object[]> findUsuarioByMatricula(@Param("matricula") String matricula);



}
