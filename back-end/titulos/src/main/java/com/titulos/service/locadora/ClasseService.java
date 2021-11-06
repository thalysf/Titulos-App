package com.titulos.service.locadora;

import com.titulos.domain.dto.locadora.ClasseDto;
import com.titulos.domain.mapper.locadora.ClasseMapper;
import com.titulos.repository.locadora.ClasseRepository;
import com.titulos.util.commons.Validate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class ClasseService {
    @Autowired
    private ClasseRepository classeRepository;

    @Autowired
    private ClasseMapper classeMapper;

    @Autowired
    private Validate validate;

    public ClasseDto cadastrarClasse(ClasseDto classeDto) {
        if(!validate.isNullOrEmpty(String.valueOf(classeDto.getIdClasse())))
        {
            throw new IllegalArgumentException("ID da classe não deve ser enviado na inserção!");
        }
        isValidClasse(classeDto);
        var classeEntity = classeMapper.classeDtoToClasse(classeDto);
        return classeMapper.classeToClasseDto(classeRepository.save(classeEntity));
    }

    public ClasseDto atualizarClasse(ClasseDto classeDto) {
        if(validate.isNullOrEmpty(String.valueOf(classeDto.getIdClasse())))
        {
            throw new IllegalArgumentException("ID da classe não pode estar vazio ou nulo");
        }
        isValidClasse(classeDto);
        var classeEntity = classeMapper.classeDtoToClasse(classeDto);
        return classeMapper.classeToClasseDto(classeRepository.save(classeEntity));
    }

    public void deletarClasse(String id_classe) {
        if (validate.isNullOrEmpty(id_classe)) {
            throw new IllegalArgumentException("ID da classe não pode estar vazio ou nulo");
        }

        var idClasse = Long.parseLong(id_classe);
        try {
            classeRepository.deleteById(idClasse);
        } catch (EmptyResultDataAccessException e) {
            throw new EntityNotFoundException("Classe de id " + id_classe + " não existe! Portanto não pode ser deletada!");
        }
    }

    public ClasseDto listarClasse(String id_classe) {
        var idClasse = Long.parseLong(id_classe);
        ClasseDto classeDto = new ClasseDto();
        try {
            classeDto = classeMapper.classeToClasseDto(classeRepository.getById(idClasse));
        } catch (EntityNotFoundException e) {
            throw new EntityNotFoundException("Classe de id " + id_classe + " não encontrada!");
        }
        return classeDto;
    }

    public List<ClasseDto> listarClassees() {
        return classeMapper.listClasseToListClasseDto(classeRepository.findAll());
    }

    private void isValidClasse(ClasseDto classeDto) {
        if (classeDto.getValor() <= 0D) {
            throw new IllegalArgumentException("Valor da classe não pode ser menor ou igual a zero!");
        } else if (classeDto.getPrazoDevolucao() <= 0) {
            throw new IllegalArgumentException("Prazo de devolução em dias da classe não pode ser menor ou igual a zero!");
        } else if (validate.isNullOrEmpty(classeDto.getNome())) {
            throw new IllegalArgumentException("Nome do classe não pode ser nulo ou vazio");
        }
    }
}
