package com.titulos.domain.mapper.locadora;

import com.titulos.domain.dto.locadora.ClasseDto;
import com.titulos.domain.entity.locadora.Classe;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ClasseMapper {
    ClasseDto classeToClasseDto(Classe classe);
    Classe classeDtoToClasse(ClasseDto classeDto);
}
