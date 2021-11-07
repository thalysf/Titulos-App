package com.titulos.service.atendimento.cliente;

import com.titulos.domain.dto.atendimento.cliente.ClienteDto;
import com.titulos.domain.mapper.atendimento.cliente.ClienteMapper;
import com.titulos.repository.atendimento.cliente.ClienteRepository;
import com.titulos.util.commons.Validate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ClienteMapper clienteMapper;

    @Autowired
    private Validate validate;

    public ClienteDto cadastrarCliente(ClienteDto clienteDto)
    {
        if(!validate.isNullOrEmpty(String.valueOf(clienteDto.getIdCliente())))
        {
            throw new IllegalArgumentException("ID do cliente não deve ser enviado na inserção!");
        }
        isValidCliente(clienteDto);

        var clienteEntity = clienteMapper.clienteDtoToCliente(clienteDto);
        return clienteMapper.clienteToClienteDto(clienteRepository.save(clienteEntity));
    }

    public ClienteDto atualizarCliente(ClienteDto clienteDto) {
        if(validate.isNullOrEmpty(String.valueOf(clienteDto.getIdCliente())))
        {
            throw new IllegalArgumentException("ID do cliente não pode estar vazio ou nulo");
        }
        isValidCliente(clienteDto);
        listarCliente(String.valueOf(clienteDto.getIdCliente()));
        var clienteEntity = clienteMapper.clienteDtoToCliente(clienteDto);
        return clienteMapper.clienteToClienteDto(clienteRepository.save(clienteEntity));
    }

    public void deletarCliente(String id_cliente) {
        if(validate.isNullOrEmpty(id_cliente))
        {
            throw new IllegalArgumentException("ID do cliente não pode estar vazio ou nulo");
        }

        var idCliente = Long.parseLong(id_cliente);
        try {
            clienteRepository.deleteById(idCliente);
        }
        catch (EmptyResultDataAccessException e)
        {
            throw new EntityNotFoundException("Cliente de id " + id_cliente + " não existe! Portanto não pode ser deletado!");
        }
    }

    public ClienteDto listarCliente(String id_cliente) {
        return clienteMapper
                .clienteToClienteDto(
                        clienteRepository
                                .findById(Long.parseLong(id_cliente))
                                .orElseThrow(() -> new EntityNotFoundException("Cliente de id " + id_cliente + " não encontrado! Operação não pode ser efetuada!")));
    }

    public List<ClienteDto> listarClientes() {
        return clienteMapper.listClienteToListClienteDto(clienteRepository.findAll());
    }

    private void isValidCliente(ClienteDto clienteDto)
    {
        String illegalArgumentsErrosMsg  = "";
        if(validate.isNullOrEmpty(clienteDto.getNome()))
        {
            illegalArgumentsErrosMsg += "Nome do cliente não pode ser nulo ou vazio";
        }
        if(clienteDto.getNumInscricao() <= 0)
        {
            illegalArgumentsErrosMsg += "Número da inscrição do cliente não pode ser menor ou igual a zero";
        }
        if(clienteDto.getSexo() == null)
        {
            illegalArgumentsErrosMsg += "Sexo do cliente não pode ser nulo";
        }
        if(clienteDto.getAtivo() == null)
        {
            illegalArgumentsErrosMsg += "Campo ativo deve ser preenchido";
        }
        if(clienteDto.getDataNascimento() == null)
        {
            illegalArgumentsErrosMsg += "Campo data nascimento deve ser preenchido";
        }

        if(!illegalArgumentsErrosMsg.isEmpty())
            throw new IllegalArgumentException(illegalArgumentsErrosMsg);
    }
}
