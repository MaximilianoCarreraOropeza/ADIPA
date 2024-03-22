package com.utez.adipa.ADIPA_BAFO.security.entity;

import com.utez.adipa.ADIPA_BAFO.model.entity.Usuario;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@AllArgsConstructor
public class UserDetailsImpl implements UserDetails {

    private String matricula;
    private String contrasena;

    public static UserDetailsImpl build(Usuario usuario){
        return new UserDetailsImpl(
                usuario.getMatricula(), usuario.getContrasena()
        );
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities(){
        return Collections.emptyList();
    }
    @Override
    public String getPassword(){
        return contrasena;
    }
    @Override
    public String getUsername(){
        return matricula;
    }
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    @Override
    public boolean isEnabled() {
        return true;
    }
}
