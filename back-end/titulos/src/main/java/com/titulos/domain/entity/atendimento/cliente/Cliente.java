package com.titulos.domain.entity.atendimento.cliente;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cliente extends ClienteModel{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idCliente;
}
