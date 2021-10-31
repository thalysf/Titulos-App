package com.titulos.domain.entity.locadora;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Classe {
	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private Long idClasse;
	 @NotNull
	 private String nome;
	 @NotNull
	 private Double valor;
	 @NotNull
	 private Integer prazoDevolucao;
}
