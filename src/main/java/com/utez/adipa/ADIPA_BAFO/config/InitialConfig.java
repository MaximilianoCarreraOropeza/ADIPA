package com.utez.adipa.ADIPA_BAFO.config;

import com.utez.adipa.ADIPA_BAFO.model.dao.DocenteRepository;
import com.utez.adipa.ADIPA_BAFO.model.dao.EstudianteRepository;
import com.utez.adipa.ADIPA_BAFO.model.dao.PersonaRepository;
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
    private final DocenteRepository docenteRepository;
    private final EstudianteRepository estudianteRepository;
    private final PersonaRepository personaRepository;
    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder encoder;

    @Override
    @Transactional(rollbackFor = {SQLException.class})
    public void run(String... args) throws Exception {
        if (!personaRepository.existsById(1L)) {
            personaRepository.savePerson(1L,"Diego Eduardo", "Jaimez", "Flores");
        }

        if (!personaRepository.existsById(2L)) {
            personaRepository.savePerson(2L,"Maximiliano", "Carrera", "Oropeza");
        }

        if (!usuarioRepository.existsById(1L)) {
            usuarioRepository.saveUsuario(1L, 1L, "estudiante", encoder.encode("estudiante"));
        }

        if (!usuarioRepository.existsById(2L)) {
            usuarioRepository.saveUsuario(2L, 2L, "docente", encoder.encode("docente"));
        }

        if (!estudianteRepository.existsById(1L)) {
            estudianteRepository.saveEstudiante(1L, 1L, "Desarrollo de Software y Multiplataforma");
        }

        if (!docenteRepository.existsById(1L)) {
            docenteRepository.saveDocente(1L, 2L, "Administrativa");
        }
    }
}
