package com.titulos.domain.entity.atendimento.cliente;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Socio extends ClienteModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
