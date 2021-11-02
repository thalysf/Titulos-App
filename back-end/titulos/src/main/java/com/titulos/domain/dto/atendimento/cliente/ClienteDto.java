package com.titulos.domain.dto.atendimento.cliente;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ClienteDto extends ClienteModel{
    @JsonProperty("id_cliente")
    private Long idCliente;
}