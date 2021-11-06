package com.titulos.controller.atendimento.cliente;

import com.titulos.domain.dto.atendimento.cliente.ClienteDto;
import com.titulos.service.atendimento.cliente.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Validated
@RequestMapping("/atendimento/cliente")
public class ClienteController {
    @Autowired
    ClienteService clienteService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ClienteDto cadastraCliente(@Valid @RequestBody ClienteDto clienteDto)
    {
        return clienteService.cadastrarCliente(clienteDto);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public ClienteDto atualizarCliente(@Valid @RequestBody ClienteDto clienteDto)
    {
        return clienteService.atualizarCliente(clienteDto);
    }

    @DeleteMapping("/{id_cliente}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarCliente(@PathVariable String id_cliente)
    {
        clienteService.deletarCliente(id_cliente);
    }

    @GetMapping("/{id_cliente}")
    @ResponseStatus(HttpStatus.OK)
    public ClienteDto listarCliente(@PathVariable String id_cliente)
    {
        return clienteService.listarCliente(id_cliente);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ClienteDto> listarClientees()
    {
        return clienteService.listarClientes();
    }
}
