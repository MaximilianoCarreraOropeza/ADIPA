package com.utez.adipa.ADIPA_BAFO.services;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.dao.PersonaRepository;
import com.utez.adipa.ADIPA_BAFO.model.dao.TipoUsuarioRepository;
import com.utez.adipa.ADIPA_BAFO.model.dao.UsuarioRepository;
import com.utez.adipa.ADIPA_BAFO.model.dto.UsuarioDto;
import com.utez.adipa.ADIPA_BAFO.model.entity.Persona;
import com.utez.adipa.ADIPA_BAFO.model.entity.TipoUsuario;
import com.utez.adipa.ADIPA_BAFO.model.entity.Usuario;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UsuarioService {
    private final UsuarioRepository repository;
    private final TipoUsuarioRepository tipoUsuarioRepository;
    private final PersonaRepository personaRepository;


    public UsuarioService(UsuarioRepository repository, TipoUsuarioRepository tipoUsuarioRepository, PersonaRepository personaRepository) {
        this.repository = repository;
        this.tipoUsuarioRepository = tipoUsuarioRepository;
        this.personaRepository = personaRepository;
    }

    @Transactional
    public Optional<Usuario> findUserByMatricula(String username){
        return repository.findByMatricula(username);
    }


    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> findAll() {
        return new ResponseEntity<>(new ApiResponse(repository.findAll(), HttpStatus.OK), HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> findBydId(Long id){
        Optional<Usuario> foundUser = repository.findById(id);
        if(foundUser.isEmpty()){
            return new ResponseEntity<>(new ApiResponse(HttpStatus.BAD_REQUEST, true, "UserNotFound"), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(new ApiResponse(foundUser.get(), HttpStatus.OK), HttpStatus.OK);
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<ApiResponse> changeContrasena(Long id, UsuarioDto usuarioDto, PasswordEncoder passwordEncoder) {
        Optional<Usuario> foundUsuario = repository.findById(id);
        if (foundUsuario.isEmpty()) {
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, "UserNotFound"), HttpStatus.BAD_REQUEST);
        }
        Usuario usuario = foundUsuario.get();
        String encryptedPassword = passwordEncoder.encode(usuarioDto.getContrasena());
        usuario.setContrasena(encryptedPassword);

        return new ResponseEntity<>(new ApiResponse(repository.save(usuario), HttpStatus.OK), HttpStatus.OK);
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<ApiResponse> register(UsuarioDto usuarioDto, PasswordEncoder passwordEncoder){
        TipoUsuario tipoUsuario = tipoUsuarioRepository.findById(usuarioDto.getTipo_id()).orElseThrow(() -> new RuntimeException("TipoUsuarioNotFound"));

        Usuario usuario = new Usuario();
        usuario.setId_usuario(usuarioDto.getId_usuario());
        usuario.setMatricula(usuarioDto.getMatricula());
        usuario.setContrasena(passwordEncoder.encode(usuarioDto.getContrasena()));
        usuario.setTipoUsuario(tipoUsuario);

        repository.save(usuario);

        return new ResponseEntity<>(new ApiResponse(usuario, HttpStatus.OK), HttpStatus.OK);
    }

    @Transactional(rollbackFor = {SQLException.class})
    public void delete(Long id){
        Optional<Usuario> foundUsuario = repository.findById(id);
        if (foundUsuario.isPresent()){
            repository.deleteById(id);
        } else {
            throw new EntityNotFoundException("UsuarioNotFound");
        }
    }

    @Transactional(rollbackFor = {SQLException.class})
    public ResponseEntity<ApiResponse> update(Long id, UsuarioDto usuarioDto, PasswordEncoder passwordEncoder){
        Usuario foundUsuario = repository.findById(id).orElseThrow(() -> new RuntimeException("UsuarioNotFound"));
        TipoUsuario foundTipoUsuario = tipoUsuarioRepository.findById(usuarioDto.getTipo_id()).orElseThrow(() -> new RuntimeException("TipoUsuarioNotFound"));

        foundUsuario.setId_usuario(usuarioDto.getId_usuario());
        foundUsuario.setMatricula(usuarioDto.getMatricula());
        foundUsuario.setContrasena(passwordEncoder.encode(usuarioDto.getContrasena()));
        foundUsuario.setTipoUsuario(foundTipoUsuario);

        repository.saveAndFlush(foundUsuario);

        return new ResponseEntity<>(new ApiResponse(foundUsuario, HttpStatus.OK), HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> findUserByMat(String matricula){
        List<Object[]> foundMatricula = repository.findUsuarioByMatricula(matricula);
        if(foundMatricula.isEmpty()){
            return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, "MatriculaNotFound"), HttpStatus.NOT_FOUND);

        }
        List<Usuario> usuarios = foundMatricula.stream().map(obj -> {
                    Usuario usuario = new Usuario();

                    usuario.setId_usuario((Long) obj[0]);
                    usuario.setTipoUsuario(tipoUsuarioRepository.findById((Long) obj[1]).orElse(null));
                    usuario.setContrasena((String) obj[2]);
                    usuario.setMatricula((String) obj[3]);

                    Persona persona = new Persona();
                    persona.setId_persona((Long) obj[4]);
                    persona.setUsuario(personaRepository.findById((Long) obj[5]).orElse(null).getUsuario());
                    persona.setNombre((String) obj[6]);
                    persona.setApellido_p((String) obj[7]);
                    persona.setApellido_m((String) obj[8]);

                    usuario.setPersona(persona);

                    TipoUsuario tipoUsuario = new TipoUsuario();

                    tipoUsuario.setId_tipo((Long) obj[9]);
                    tipoUsuario.setNombre((String) obj[10]);

                    usuario.setTipoUsuario(tipoUsuario);

                    return usuario;
                }).toList();


        return new ResponseEntity<>(new ApiResponse(usuarios, HttpStatus.OK), HttpStatus.OK);
    }

}
