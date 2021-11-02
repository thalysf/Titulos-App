package com.titulos.domain.mapper.atendimento.cliente;

import com.titulos.domain.dto.atendimento.cliente.ClienteDto;
import com.titulos.domain.entity.atendimento.cliente.Cliente;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ClienteMapper {
    ClienteDto clienteToClienteDto(Cliente cliente);
    Cliente clienteDtoToCliente(ClienteDto clienteDto);
}
