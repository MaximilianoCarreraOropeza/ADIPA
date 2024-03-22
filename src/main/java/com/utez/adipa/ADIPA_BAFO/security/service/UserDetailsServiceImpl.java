package com.utez.adipa.ADIPA_BAFO.security.service;

import com.utez.adipa.ADIPA_BAFO.model.entity.Usuario;
import com.utez.adipa.ADIPA_BAFO.security.entity.UserDetailsImpl;
import com.utez.adipa.ADIPA_BAFO.services.UsuarioService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UsuarioService service;

    public UserDetailsServiceImpl(UsuarioService service) {
        this.service = service;
    }

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Usuario> foundUsuario = service.findUserByMatricula(username);
        if(foundUsuario.isPresent()){
            return UserDetailsImpl.build(foundUsuario.get());
        }
        throw new UsernameNotFoundException("UserNoFound");
    }

}
