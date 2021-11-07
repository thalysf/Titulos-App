package com.titulos.service.locadora;

import com.titulos.domain.dto.locadora.DiretorDto;
import com.titulos.domain.mapper.locadora.DiretorMapper;
import com.titulos.repository.locadora.DiretorRepository;
import com.titulos.util.commons.Validate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class DiretorService {
    @Autowired
    private DiretorRepository diretorRepository;

    @Autowired
    private DiretorMapper diretorMapper;

    @Autowired
    private Validate validate;

    public DiretorDto cadastrarDiretor(DiretorDto diretorDto)
    {
        if(!validate.isNullOrEmpty(String.valueOf(diretorDto.getIdDiretor())))
        {
            throw new IllegalArgumentException("ID do diretor não deve ser enviado na inserção!");
        }
        isValidDiretor(diretorDto);

        var diretorEntity = diretorMapper.diretorDtoToDiretor(diretorDto);
        return diretorMapper.diretorToDiretorDto(diretorRepository.save(diretorEntity));
    }

    public DiretorDto atualizarDiretor(DiretorDto diretorDto) {
        if(validate.isNullOrEmpty(String.valueOf(diretorDto.getIdDiretor())))
        {
            throw new IllegalArgumentException("ID do diretor não pode estar vazio ou nulo");
        }
        isValidDiretor(diretorDto);
        listarDiretor(String.valueOf(diretorDto.getIdDiretor()));
        var diretorEntity = diretorMapper.diretorDtoToDiretor(diretorDto);
        return diretorMapper.diretorToDiretorDto(diretorRepository.save(diretorEntity));
    }

    public void deletarDiretor(String id_diretor) {
        if(validate.isNullOrEmpty(id_diretor))
        {
            throw new IllegalArgumentException("ID do diretor não pode estar vazio ou nulo");
        }

        var idDiretor = Long.parseLong(id_diretor);
        try {
            diretorRepository.deleteById(idDiretor);
        }
        catch (EmptyResultDataAccessException e)
        {
            throw new EntityNotFoundException("Diretor de id " + id_diretor + " não existe! Portanto não pode ser deletado!");
        }
    }

    public DiretorDto listarDiretor(String id_diretor) {
        return diretorMapper
                .diretorToDiretorDto(
                        diretorRepository
                                .findById(Long.parseLong(id_diretor))
                                .orElseThrow(() -> new EntityNotFoundException("Diretor de id " + id_diretor + " não encontrado! Operação não pode ser efetuada!")));
    }

    public List<DiretorDto> listarDiretores() {
        return diretorMapper.listDiretorToListDiretorDto(diretorRepository.findAll());
    }

    private void isValidDiretor(DiretorDto diretorDto)
    {
        if(validate.isNullOrEmpty(diretorDto.getNome()))
        {
            throw new IllegalArgumentException("Nome do diretor não pode ser nulo ou vazio");
        }
    }
}
