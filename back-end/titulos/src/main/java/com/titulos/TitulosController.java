package com.titulos;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/titulos")
@CrossOrigin
public class TitulosController {

    @GetMapping
    public List<Titulo> obterTitulos(){
        return List.of(new Titulo("Harry potter"), new Titulo("Senhor dos Aneis"));
    }

    @GetMapping("/{id}")
    public Titulo obterTitulo(@PathVariable String id){
        return new Titulo("Harry potter");
    }
}
