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
        listarClasse(String.valueOf(classeDto.getIdClasse()));
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
        return classeMapper
                .classeToClasseDto(
                        classeRepository
                                .findById(Long.parseLong(id_classe))
                                .orElseThrow(() -> new EntityNotFoundException("Classe de id " + id_classe + " não encontrado! Operação não pode ser efetuada!")));
    }

    public List<ClasseDto> listarClasses() {
        return classeMapper.listClasseToListClasseDto(classeRepository.findAll());
    }

    private void isValidClasse(ClasseDto classeDto) {
        String illegalArgumentsErrosMsg  = "";
        if (classeDto.getValor() == null || classeDto.getValor() <= 0D) {
            illegalArgumentsErrosMsg += "Valor da classe não pode ser menor ou igual a zero ou nulo! ";
        }
        if (classeDto.getPrazoDevolucao() == null || classeDto.getPrazoDevolucao() <= 0) {
            illegalArgumentsErrosMsg += "Prazo de devolução em dias da classe não pode ser menor ou igual a zero ou nulo! ";
        }
        if (validate.isNullOrEmpty(classeDto.getNome())) {
            illegalArgumentsErrosMsg += "Nome do classe não pode ser nulo ou vazio! ";
        }
        if(!illegalArgumentsErrosMsg.isEmpty())
            throw new IllegalArgumentException(illegalArgumentsErrosMsg);
    }
}
