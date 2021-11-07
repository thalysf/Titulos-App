package com.titulos.domain.entity.atendimento.cliente;

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
    @NotNull
    private String nome;
    @NotNull
    private Long numInscricao;
    @NotNull
    private Date dataNascimento;
    @NotNull
    private String sexo;
    @NotNull
    private Boolean ativo;
}
