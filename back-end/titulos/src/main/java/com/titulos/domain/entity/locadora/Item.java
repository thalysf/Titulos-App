package com.titulos.domain.entity.locadora;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idItem;
    @NotNull
    private Long numeroSerie;
    @NotNull
    private Date dataAquisicao;
    @NotNull
    private String tipo;

    @ManyToOne
    @NotNull
    @JoinColumn(name = "idTitulo")
    private Titulo titulo;
}
