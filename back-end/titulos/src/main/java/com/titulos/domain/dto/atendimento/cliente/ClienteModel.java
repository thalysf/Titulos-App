package com.titulos.domain.dto.atendimento.cliente;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@MappedSuperclass
public abstract class ClienteModel {
    @JsonProperty("nome")
    @NotNull
    private String nome;

    @JsonProperty("num_inscricao")
    @NotNull
    private Long numInscricao;

    @JsonProperty("data_nascimento")
    @NotNull
    private Date dataNascimento;

    @JsonProperty("sexo")
    @NotNull
    private String sexo;

    @JsonProperty("ativo")
    @NotNull
    private Boolean ativo;
}
