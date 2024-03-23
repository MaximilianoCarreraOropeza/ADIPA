package com.utez.adipa.ADIPA_BAFO.controller;

import com.utez.adipa.ADIPA_BAFO.config.ApiResponse;
import com.utez.adipa.ADIPA_BAFO.model.dto.SignDto;
import com.utez.adipa.ADIPA_BAFO.services.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/adipa/auth")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthController {
    private final AuthService service;

    public AuthController(AuthService service){
        this.service = service;
    }

    @PostMapping("/signin")
    public ResponseEntity<ApiResponse> signIn(@RequestBody SignDto dto){
        return service.signIn(dto.getMatricula(), dto.getContrasena());
    }

    @PostMapping("/logout")
    public ResponseEntity<ApiResponse> signOut(HttpServletRequest request){
        request.getSession().invalidate();
        return ResponseEntity.ok(new ApiResponse(HttpStatus.OK, false, "Sesion Cerrada"));
    }

}
