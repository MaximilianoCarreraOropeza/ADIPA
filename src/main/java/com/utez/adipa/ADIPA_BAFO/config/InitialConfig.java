package com.utez.adipa.ADIPA_BAFO.config;

import com.utez.adipa.ADIPA_BAFO.model.dao.PersonaRepository;
import com.utez.adipa.ADIPA_BAFO.model.dao.TipoUsuarioRepository;
import com.utez.adipa.ADIPA_BAFO.model.dao.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;

@Configuration
@RequiredArgsConstructor
public class InitialConfig implements CommandLineRunner {
    private final PersonaRepository personaRepository;
    private final UsuarioRepository usuarioRepository;
    private final TipoUsuarioRepository tipoUsuarioRepository;
    private final PasswordEncoder encoder;

    @Override
    @Transactional(rollbackFor = {SQLException.class})
    public void run(String... args) throws Exception {
        if (!tipoUsuarioRepository.existsById(1L)) {
            tipoUsuarioRepository.saveRole(1L, "Administrador" );
        }

        if (!tipoUsuarioRepository.existsById(2L)) {
            tipoUsuarioRepository.saveRole(2L, "Empleado" );
        }

        if (!tipoUsuarioRepository.existsById(3L)) {
            tipoUsuarioRepository.saveRole(3L, "Estudiante" );
        }

        if (!tipoUsuarioRepository.existsById(4L)) {
            tipoUsuarioRepository.saveRole(4L, "Externo" );
        }

        if (!usuarioRepository.existsById(1L)) {
            usuarioRepository.saveUsuario(1L, 1L, "20223tn026", encoder.encode("20223tn026"));
        }

        if (!usuarioRepository.existsById(2L)) {
            usuarioRepository.saveUsuario(2L, 2L, "20223tn012", encoder.encode("20223tn012"));
        }

        if (!usuarioRepository.existsById(3L)) {
            usuarioRepository.saveUsuario(3L, 3L, "20223tn021", encoder.encode("JaimezFlores104"));
        }

        if (!usuarioRepository.existsById(4L)) {
            usuarioRepository.saveUsuario(4L, 4L, "20223tn152", encoder.encode("20223tn152"));
        }

        if (!personaRepository.existsById(1L)) {
            personaRepository.savePerson(1L,"Miguel", "Angel", "Mondragón", "Fernandez", 1L);
        }

        if (!personaRepository.existsById(2L)) {
            personaRepository.savePerson(2L,"Maximiliano", "","Carrera", "Oropeza", 2L);
        }

        if (!personaRepository.existsById(3L)) {
            personaRepository.savePerson(3L,"Diego", "Eduardo", "Jaimez", "Flores", 3L);
        }

        if (!personaRepository.existsById(4L)) {
            personaRepository.savePerson(4L,"Carlos", "Eduardo","Delgado", "Dominguez", 4L);
        }
    }
}
