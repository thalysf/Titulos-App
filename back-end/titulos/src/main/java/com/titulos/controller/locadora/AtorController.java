package com.titulos.controller.locadora;

import com.titulos.domain.dto.locadora.AtorDto;
import com.titulos.service.locadora.AtorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Validated
@RequestMapping("/locadora/ator")
public class AtorController {
    @Autowired
    AtorService atorService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public AtorDto cadastraAtor(@Valid @RequestBody AtorDto atorDto)
    {
        return atorService.cadastrarAtor(atorDto);
    }

    @PatchMapping
    @ResponseStatus(HttpStatus.OK)
    public AtorDto atualizarAtor(@RequestBody AtorDto atorDto)
    {
        return atorService.atualizarAtor(atorDto);
    }

    @DeleteMapping("/{id_ator}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarAtor(@PathVariable String id_ator)
    {
        atorService.deletarAtor(id_ator);
    }

    @GetMapping("/{id_ator}")
    @ResponseStatus(HttpStatus.OK)
    public AtorDto listarAtor(@PathVariable String id_ator)
    {
        return atorService.listarAtor(id_ator);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<AtorDto> listarAtores()
    {
        return atorService.listarAtores();
    }
}