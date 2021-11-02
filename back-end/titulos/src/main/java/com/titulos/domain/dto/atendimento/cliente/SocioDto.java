package com.titulos.domain.dto.atendimento.cliente;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotNull;
import java.util.List;

public class SocioDto extends ClienteModel{
    @JsonProperty("id_socio")
    private Long idSocio;

    @JsonProperty("cpf")
    @NotNull
    private String cpf;

    @JsonProperty("endereco")
    @NotNull
    private String endereco;

    @JsonProperty("tel")
    @NotNull
    private String tel;

    @JsonProperty("dependentes")
    private List<ClienteDto> dependentes;
}
