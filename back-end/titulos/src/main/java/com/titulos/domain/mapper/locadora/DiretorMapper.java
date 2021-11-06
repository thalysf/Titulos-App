package com.titulos.domain.mapper.locadora;

import com.titulos.domain.dto.locadora.DiretorDto;
import com.titulos.domain.entity.locadora.Diretor;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface DiretorMapper {
    DiretorDto diretorToDiretorDto(Diretor diretor);
    Diretor diretorDtoToDiretor(DiretorDto diretorDto);

    List<DiretorDto> listDiretorToListDiretorDto(List<Diretor> diretores);
}
