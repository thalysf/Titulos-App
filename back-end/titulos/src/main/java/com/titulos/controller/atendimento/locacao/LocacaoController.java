package com.titulos.controller.atendimento.locacao;

import com.titulos.domain.dto.atendimento.locacao.LocacaoDto;
import com.titulos.service.atendimento.locacao.LocacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Validated
@RequestMapping("/atendimento/locacao")
public class LocacaoController {
    @Autowired
    LocacaoService locacaoService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public LocacaoDto cadastraLocacao(@Valid @RequestBody LocacaoDto locacaoDto)
    {
        return locacaoService.cadastrarLocacao(locacaoDto);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public LocacaoDto atualizarLocacao(@Valid @RequestBody LocacaoDto locacaoDto)
    {
        return locacaoService.atualizarLocacao(locacaoDto);
    }

    @DeleteMapping("/{id_locacao}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarLocacao(@PathVariable String id_locacao)
    {
        locacaoService.deletarLocacao(id_locacao);
    }

    @GetMapping("/{id_locacao}")
    @ResponseStatus(HttpStatus.OK)
    public LocacaoDto listarLocacao(@PathVariable String id_locacao)
    {
        return locacaoService.listarLocacao(id_locacao);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<LocacaoDto> listarLocacoes()
    {
        return locacaoService.listarLocacoes();
    }
}
