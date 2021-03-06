package com.titulos.domain.mapper.locadora;

import com.titulos.domain.dto.locadora.AtorDto;
import com.titulos.domain.entity.locadora.Ator;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AtorMapper {
    AtorDto atorToAtorDto(Ator ator);
    Ator atorDtoToAtor(AtorDto atorDto);
    List<AtorDto> listAtorToListAtorDto(List<Ator> atores);
}
