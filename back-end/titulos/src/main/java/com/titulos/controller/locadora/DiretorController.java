package com.titulos.controller.locadora;

import com.titulos.domain.dto.locadora.DiretorDto;
import com.titulos.service.locadora.DiretorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Validated
@RequestMapping("/locadora/diretor")
public class DiretorController {
    @Autowired
    DiretorService diretorService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public DiretorDto cadastraDiretor(@Valid @RequestBody DiretorDto diretorDto)
    {
        return diretorService.cadastrarDiretor(diretorDto);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public DiretorDto atualizarDiretor(@Valid @RequestBody DiretorDto diretorDto)
    {
        return diretorService.atualizarDiretor(diretorDto);
    }

    @DeleteMapping("/{id_diretor}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarDiretor(@PathVariable String id_diretor)
    {
        diretorService.deletarDiretor(id_diretor);
    }

    @GetMapping("/{id_diretor}")
    @ResponseStatus(HttpStatus.OK)
    public DiretorDto listarDiretor(@PathVariable String id_diretor)
    {
        return diretorService.listarDiretor(id_diretor);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<DiretorDto> listarDiretores()
    {
        return diretorService.listarDiretores();
    }
}
