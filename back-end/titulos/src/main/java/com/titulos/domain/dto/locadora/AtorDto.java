package com.titulos.domain.dto.locadora;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AtorDto {
    @JsonProperty("id_ator")
    private Long idAtor;

    @JsonProperty("nome")
    @NotNull
    private String nome;
}
