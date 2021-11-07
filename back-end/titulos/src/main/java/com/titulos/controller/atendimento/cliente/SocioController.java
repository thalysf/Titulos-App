package com.titulos.controller.atendimento.cliente;

import com.titulos.domain.dto.atendimento.cliente.SocioDto;
import com.titulos.service.atendimento.cliente.SocioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Validated
@CrossOrigin
@RequestMapping("/atendimento/socio")
public class SocioController {
    @Autowired
    SocioService socioService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public SocioDto cadastraSocio(@Valid @RequestBody SocioDto socioDto)
    {
        return socioService.cadastrarSocio(socioDto);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public SocioDto atualizarSocio(@Valid @RequestBody SocioDto socioDto)
    {
        return socioService.atualizarSocio(socioDto);
    }

    @DeleteMapping("/{id_socio}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarSocio(@PathVariable String id_socio)
    {
        socioService.deletarSocio(id_socio);
    }

    @GetMapping("/{id_socio}")
    @ResponseStatus(HttpStatus.OK)
    public SocioDto listarSocio(@PathVariable String id_socio)
    {
        return socioService.listarSocio(id_socio);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<SocioDto> listarSocios()
    {
        return socioService.listarSocios();
    }
}
