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
public class Diretor {
	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private Long idDiretor;
	 @NotNull
	 private String nome;
}
