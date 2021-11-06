package com.titulos.service.locadora;

import com.titulos.domain.dto.locadora.AtorDto;
import com.titulos.domain.mapper.locadora.AtorMapper;
import com.titulos.repository.locadora.AtorRepository;
import com.titulos.util.commons.Validate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class AtorService {
    @Autowired
    private AtorRepository atorRepository;

    @Autowired
    private AtorMapper atorMapper;

    @Autowired
    private Validate validate;

    public AtorDto cadastrarAtor(AtorDto atorDto)
    {
        if(!validate.isNullOrEmpty(String.valueOf(atorDto.getIdAtor())))
        {
            throw new IllegalArgumentException("ID do ator não deve ser enviado na inserção!");
        }
        isValidAtor(atorDto);

        var atorEntity = atorMapper.atorDtoToAtor(atorDto);
        return atorMapper.atorToAtorDto(atorRepository.save(atorEntity));
    }

    public AtorDto atualizarAtor(AtorDto atorDto) {
        if(validate.isNullOrEmpty(String.valueOf(atorDto.getIdAtor())))
        {
            throw new IllegalArgumentException("ID do ator não pode estar vazio ou nulo");
        }
        isValidAtor(atorDto);
        listarAtor(String.valueOf(atorDto.getIdAtor()));
        var atorEntity = atorMapper.atorDtoToAtor(atorDto);
        return atorMapper.atorToAtorDto(atorRepository.save(atorEntity));
    }

    public void deletarAtor(String id_ator) {
        if(validate.isNullOrEmpty(id_ator))
        {
            throw new IllegalArgumentException("ID do ator não pode estar vazio ou nulo");
        }

        var idAtor = Long.parseLong(id_ator);
        try {
            atorRepository.deleteById(idAtor);
        }
        catch (EmptyResultDataAccessException e)
        {
            throw new EntityNotFoundException("Ator de id " + id_ator + " não existe! Portanto não pode ser deletado!");
        }
    }

    public AtorDto listarAtor(String id_ator) {
        var idAtor = Long.parseLong(id_ator);
        AtorDto atorDto = new AtorDto();
        try{
            atorDto = atorMapper.atorToAtorDto(atorRepository.getById(idAtor));
        }
        catch (EntityNotFoundException e)
        {
            throw new EntityNotFoundException("Ator de id " + id_ator + " não encontrado! Operação não pode ser efetuada!");
        }
        return atorDto;
    }

    public List<AtorDto> listarAtores() {
        return atorMapper.listAtorToListAtorDto(atorRepository.findAll());
    }

    private void isValidAtor(AtorDto atorDto)
    {
        if(validate.isNullOrEmpty(atorDto.getNome()))
        {
            throw new IllegalArgumentException("Nome do ator não pode ser nulo ou vazio");
        }
    }
}