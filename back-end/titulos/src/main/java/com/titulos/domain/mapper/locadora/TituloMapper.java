package com.titulos.domain.mapper.locadora;

import com.titulos.domain.dto.locadora.TituloDto;
import com.titulos.domain.entity.locadora.Titulo;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TituloMapper {
    TituloDto tituloToTituloDto(Titulo titulo);
    Titulo tituloDtoToTitulo(TituloDto tituloDto);

    List<TituloDto> listTituloToListTituloDto(List<Titulo> titulos);
}
