package com.titulos.domain.mapper.atendimento.locacao;

import com.titulos.domain.dto.atendimento.locacao.LocacaoDto;
import com.titulos.domain.entity.atendimento.locacao.Locacao;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface LocacaoMapper {
    LocacaoDto locacaoToLocacaoDto(Locacao locacao);
    Locacao locacaoDtoToLocacao(LocacaoDto locacaoDto);

    List<LocacaoDto> listLocacaoToListLocacaoDto(List<Locacao> locacoes);
}
