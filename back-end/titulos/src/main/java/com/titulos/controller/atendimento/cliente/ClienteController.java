package com.titulos.controller.atendimento.cliente;

import com.titulos.domain.dto.atendimento.cliente.ClienteDto;
import com.titulos.domain.entity.atendimento.cliente.Cliente;
import com.titulos.domain.mapper.atendimento.cliente.ClienteMapper;
import com.titulos.repository.atendimento.cliente.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@Validated
@RequestMapping("/atendimento")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ClienteMapper clienteMapper;

    @PostMapping("/clientes")
    @ResponseStatus(HttpStatus.CREATED)
    public ClienteDto cadastraCliente(@RequestBody ClienteDto clienteDto)
    {
        Cliente cliente = clienteMapper.clienteDtoToCliente(clienteDto);

        var clienteSalvo = clienteRepository.save(cliente);

        return clienteMapper.clienteToClienteDto(clienteSalvo);
    }

}
