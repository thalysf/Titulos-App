package com.titulos.domain.entity.atendimento.cliente;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class Socio extends ClienteModel{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idSocio;

    @NotNull
    private String cpf;
    @NotNull
    private String endereco;
    @NotNull
    private String tel;

    @OneToMany
    @JoinTable(name="socio_dependente", joinColumns= {@JoinColumn(name="idSocio")}, inverseJoinColumns= {@JoinColumn(name="idCliente")})
    private List<Cliente> dependentes;
}
