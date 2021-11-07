package com.titulos.domain.dto.locadora;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DiretorDto {
    @JsonProperty("id_diretor")
    private Long idDiretor;

    @JsonProperty("nome")
    @NotNull
    private String nome;
}
