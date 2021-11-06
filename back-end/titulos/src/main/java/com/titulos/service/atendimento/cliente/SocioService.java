package com.titulos.service.atendimento.cliente;

import com.titulos.domain.dto.atendimento.cliente.SocioDto;
import com.titulos.domain.mapper.atendimento.cliente.SocioMapper;
import com.titulos.repository.atendimento.cliente.SocioRepository;
import com.titulos.util.commons.Validate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class SocioService {
    @Autowired
    private SocioRepository socioRepository;

    @Autowired
    private SocioMapper socioMapper;

    @Autowired
    private Validate validate;

    public SocioDto cadastrarSocio(SocioDto socioDto)
    {
        if(!validate.isNullOrEmpty(String.valueOf(socioDto.getIdSocio())))
        {
            throw new IllegalArgumentException("ID do socio não deve ser enviado na inserção!");
        }
        isValidSocio(socioDto);

        var socioEntity = socioMapper.socioDtoToSocio(socioDto);
        return socioMapper.socioToSocioDto(socioRepository.save(socioEntity));
    }

    public SocioDto atualizarSocio(SocioDto socioDto) {
        if(validate.isNullOrEmpty(String.valueOf(socioDto.getIdSocio())))
        {
            throw new IllegalArgumentException("ID do socio não pode estar vazio ou nulo");
        }
        isValidSocio(socioDto);
        listarSocio(String.valueOf(socioDto.getIdSocio()));
        var socioEntity = socioMapper.socioDtoToSocio(socioDto);
        return socioMapper.socioToSocioDto(socioRepository.save(socioEntity));
    }

    public void deletarSocio(String id_socio) {
        if(validate.isNullOrEmpty(id_socio))
        {
            throw new IllegalArgumentException("ID do socio não pode estar vazio ou nulo");
        }

        var idSocio = Long.parseLong(id_socio);
        try {
            socioRepository.deleteById(idSocio);
        }
        catch (EmptyResultDataAccessException e)
        {
            throw new EntityNotFoundException("Socio de id " + id_socio + " não existe! Portanto não pode ser deletado!");
        }
    }

    public SocioDto listarSocio(String id_socio) {
        return socioMapper
                .socioToSocioDto(
                        socioRepository
                                .findById(Long.parseLong(id_socio))
                                .orElseThrow(() -> new EntityNotFoundException("Socio de id " + id_socio + " não encontrado! Operação não pode ser efetuada!")));
    }

    public List<SocioDto> listarSocios() {
        return socioMapper.listSocioToListSocioDto(socioRepository.findAll());
    }

    private void isValidSocio(SocioDto socioDto)
    {
        String illegalArgumentsErrosMsg  = "";
        if(validate.isNullOrEmpty(socioDto.getNome()))
        {
            illegalArgumentsErrosMsg += "Nome do socio não pode ser nulo ou vazio";
        }
        if(socioDto.getNumInscricao() <= 0)
        {
            illegalArgumentsErrosMsg += "Número da inscrição do socio não pode ser menor ou igual a zero";
        }
        if(socioDto.getSexo() == null)
        {
            illegalArgumentsErrosMsg += "Sexo do socio não pode ser nulo";
        }
        if(socioDto.getAtivo() == null)
        {
            illegalArgumentsErrosMsg += "Campo ativo deve ser preenchido";
        }
        if(validate.isNullOrEmpty(socioDto.getCpf()) || !validate.isCPF(socioDto.getCpf()))
        {
            illegalArgumentsErrosMsg += "Campo CPF deve ser preenchido corretamente!";
        }
        if(validate.isNullOrEmpty(socioDto.getEndereco()))
        {
            illegalArgumentsErrosMsg += "Endereço do socio não pode ser nulo ou vazio!";
        }
        if(validate.isNullOrEmpty(socioDto.getTel()))
        {
            illegalArgumentsErrosMsg += "Tel do socio não pode ser nulo ou vazio!";
        }
        if(socioDto.getDependentes().size() > 3)
        {
            illegalArgumentsErrosMsg += "Sócio pode ter apenas 3 dependentes ativos!";
        }

        if(!illegalArgumentsErrosMsg.isEmpty())
            throw new IllegalArgumentException(illegalArgumentsErrosMsg);
    }
}
