package com.titulos.domain.entity.atendimento.locacao;

import com.titulos.domain.entity.atendimento.cliente.Cliente;
import com.titulos.domain.entity.atendimento.cliente.Socio;
import com.titulos.domain.entity.locadora.Item;
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
public class Locacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idLocacao;
    @NotNull
    private Date dataLocacao;
    @NotNull
    private Date dataDevolucaoPrevista;
    private Date dataDevolucaoEfetiva;
    @NotNull
    private Double valorCobrado;
    private Double multaCobrada;

    @ManyToOne
    @JoinColumn(name = "idCliente")
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name = "idSocio")
    private Socio socio;

    @ManyToOne
    @NotNull
    @JoinColumn(name = "idItem")
    private Item item;
}
