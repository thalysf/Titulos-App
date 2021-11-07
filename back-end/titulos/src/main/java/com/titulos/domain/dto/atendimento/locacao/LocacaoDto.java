package com.titulos.domain.dto.atendimento.locacao;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.titulos.domain.dto.atendimento.cliente.ClienteDto;
import com.titulos.domain.dto.atendimento.cliente.SocioDto;
import com.titulos.domain.dto.locadora.ItemDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LocacaoDto {
    @JsonProperty("id_locacao")
    private Long idLocacao;

    @JsonProperty("data_locacao")
    @NotNull
    private Date dataLocacao;

    @JsonProperty("data_devolucao_prevista")
    @NotNull
    private Date dataDevolucaoPrevista;

    @JsonProperty("data_devolucao_efetiva")
    private Date dataDevolucaoEfetiva;

    @JsonProperty("valor_cobrado")
    @NotNull
    private Double valorCobrado;

    @JsonProperty("multa_cobrada")
    private Double multaCobrada;

    @JsonProperty("cliente")
    @NotNull
    private ClienteDto cliente;

    @JsonProperty("socio")
    @NotNull
    private SocioDto socio;

    @JsonProperty("item")
    @NotNull
    private ItemDto item;
}
