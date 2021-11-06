package com.titulos.controller.locadora;

import com.titulos.domain.dto.locadora.ClasseDto;
import com.titulos.service.locadora.ClasseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Validated
@RequestMapping("/locadora/classe")
public class ClasseController {
    @Autowired
    ClasseService classeService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ClasseDto cadastraClasse(@Valid @RequestBody ClasseDto classeDto)
    {
        return classeService.cadastrarClasse(classeDto);
    }

    @PatchMapping
    @ResponseStatus(HttpStatus.OK)
    public ClasseDto atualizarClasse(@RequestBody ClasseDto classeDto)
    {
        return classeService.atualizarClasse(classeDto);
    }

    @DeleteMapping("/{id_classe}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarClasse(@PathVariable String id_classe)
    {
        classeService.deletarClasse(id_classe);
    }

    @GetMapping("/{id_classe}")
    @ResponseStatus(HttpStatus.OK)
    public ClasseDto listarClasse(@PathVariable String id_classe)
    {
        return classeService.listarClasse(id_classe);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ClasseDto> listarClassees()
    {
        return classeService.listarClassees();
    }
}
