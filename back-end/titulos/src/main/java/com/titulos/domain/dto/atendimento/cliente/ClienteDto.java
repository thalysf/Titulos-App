package com.titulos.domain.dto.atendimento.cliente;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClienteDto extends ClienteModel{
    @JsonProperty("id_cliente")
    private Long idCliente;
}