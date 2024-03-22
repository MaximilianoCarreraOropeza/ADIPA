package com.utez.adipa.ADIPA_BAFO.services;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.dto.SignedDto;
import com.utez.adipa.ADIPA_BAFO.model.entity.Usuario;
import com.utez.adipa.ADIPA_BAFO.security.jwt.JwtProvider;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class AuthService {
    private final UsuarioService service;
    private final AuthenticationManager manager;
    private final JwtProvider provider;

    public AuthService(UsuarioService service, AuthenticationManager manager, JwtProvider provider) {
        this.service = service;
        this.manager = manager;
        this.provider = provider;
    }

    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> signIn(String matricula, String contrasena){
        try {
            Optional<Usuario> foundUser = service.findUserByMatricula(matricula);
            if (foundUser.isEmpty()){
                return new ResponseEntity<>(new ApiResponse(HttpStatus.NOT_FOUND, true, "UserNotFound"), HttpStatus.BAD_REQUEST);
            }
            Usuario usuario = foundUser.get();

            Authentication auth = manager.authenticate(new UsernamePasswordAuthenticationToken(matricula, contrasena));
            SecurityContextHolder.getContext().setAuthentication(auth);
            String token = provider.generateToken(auth);
            //SignedDto (token, tokenType, usuario, personas)
            SignedDto signedDto = new SignedDto(token, "Bearer", usuario, usuario.getPersona().getId_persona());
            return new ResponseEntity<>(new ApiResponse(signedDto, HttpStatus.OK), HttpStatus.OK);
        } catch (Exception e){
            String message = "CredentialsMismatch";
            if (e instanceof DisabledException){
                message = "UserDisabled";
            }
            return new ResponseEntity<>(new ApiResponse(HttpStatus.BAD_REQUEST, true, message), HttpStatus.BAD_REQUEST);
        }
    }
}
