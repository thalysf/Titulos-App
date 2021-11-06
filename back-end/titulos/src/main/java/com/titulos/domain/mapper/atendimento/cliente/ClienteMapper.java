package com.titulos.domain.mapper.atendimento.cliente;

import com.titulos.domain.dto.atendimento.cliente.ClienteDto;
import com.titulos.domain.entity.atendimento.cliente.Cliente;
import org.mapstruct.Mapper;
import org.mapstruct.MappingInheritanceStrategy;

import java.util.List;

@Mapper(componentModel = "spring" , mappingInheritanceStrategy = MappingInheritanceStrategy.AUTO_INHERIT_ALL_FROM_CONFIG)
public interface ClienteMapper {
    ClienteDto clienteToClienteDto(Cliente cliente);
    Cliente clienteDtoToCliente(ClienteDto clienteDto);

    List<ClienteDto> listClienteToListClienteDto(List<Cliente> clientes);
}
