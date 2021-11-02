package com.titulos.domain.dto.locadora;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TituloDto {
    @JsonProperty("id_titulo")
    private Long idTitulo;

    @JsonProperty("nome")
    @NotNull
    private String nome;

    @JsonProperty("ano")
    @NotNull
    private String ano;

    @JsonProperty("categoria")
    @NotNull
    private String categoria;

    @JsonProperty("sinopse")
    @NotNull
    private String sinopse;

    @JsonProperty("diretor")
    @NotNull
    private DiretorDto diretor;

    @JsonProperty("classe")
    @NotNull
    private ClasseDto classe;

    @JsonProperty("atores")
    @NotNull
    private List<AtorDto> atores;
}
