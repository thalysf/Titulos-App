package com.titulos.domain.dto.locadora;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClasseDto {
    @JsonProperty("id_classe")
    private Long idClasse;

    @JsonProperty("nome")
    @NotNull
    private String nome;

    @JsonProperty("valor")
    @NotNull
    private Double valor;

    @JsonProperty("prazo_devolucao")
    @NotNull
    private Integer prazoDevolucao;
}
