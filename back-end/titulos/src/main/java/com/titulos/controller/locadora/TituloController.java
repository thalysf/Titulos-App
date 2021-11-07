package com.titulos.controller.locadora;

import com.titulos.domain.dto.locadora.TituloDto;
import com.titulos.service.locadora.TituloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Validated
@CrossOrigin
@RequestMapping("/locadora/titulo")
public class TituloController {
    @Autowired
    TituloService tituloService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TituloDto cadastraTitulo(@Valid @RequestBody TituloDto tituloDto)
    {
        return tituloService.cadastrarTitulo(tituloDto);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public TituloDto atualizarTitulo(@Valid @RequestBody TituloDto tituloDto)
    {
        return tituloService.atualizarTitulo(tituloDto);
    }

    @DeleteMapping("/{id_titulo}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarTitulo(@PathVariable String id_titulo)
    {
        tituloService.deletarTitulo(id_titulo);
    }

    @GetMapping("/{id_titulo}")
    @ResponseStatus(HttpStatus.OK)
    public TituloDto listarTitulo(@PathVariable String id_titulo)
    {
        return tituloService.listarTitulo(id_titulo);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<TituloDto> listarTituloes()
    {
        return tituloService.listarTitulos();
    }
}
