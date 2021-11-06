package com.titulos.domain.mapper.atendimento.cliente;

import com.titulos.domain.dto.atendimento.cliente.SocioDto;
import com.titulos.domain.entity.atendimento.cliente.Socio;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface SocioMapper {
    SocioDto socioToSocioDto(Socio socio);
    Socio socioDtoToSocio(SocioDto socioDto);

    List<SocioDto> listSocioToListSocioDto(List<Socio> socios);
}
