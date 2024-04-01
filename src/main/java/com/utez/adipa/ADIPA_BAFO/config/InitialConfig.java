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
            tipoUsuarioRepository.saveRole(1L, "Empleado" );
        }

        if (!tipoUsuarioRepository.existsById(2L)) {
            tipoUsuarioRepository.saveRole(2L, "Estudiante" );
        }

        if (!usuarioRepository.existsById(1L)) {
            usuarioRepository.saveUsuario(1L, 1L, "20223tn021", encoder.encode("JaimezFlores104"));
        }

        if (!usuarioRepository.existsById(2L)) {
            usuarioRepository.saveUsuario(2L, 2L, "20223tn032", encoder.encode("20223tn032"));
        }

        if (!personaRepository.existsById(1L)) {
            personaRepository.savePerson(1L,"Diego Eduardo", "Jaimez", "Flores", 1L);
        }

        if (!personaRepository.existsById(2L)) {
            personaRepository.savePerson(2L,"Maximiliano", "Carrera", "Oropeza", 2L);
        }
    }
}
