package com.titulos.domain.dto.locadora;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemDto {
    @JsonProperty("id_item")
    private Long idItem;

    @JsonProperty("numero_serie")
    @NotNull
    private Long numeroSerie;

    @JsonProperty("data_aquisicao")
    @NotNull
    private Date dataAquisicao;

    @JsonProperty("tipo")
    @NotNull
    private String tipo;

    @JsonProperty("titulo")
    @NotNull
    private TituloDto titulo;
}
