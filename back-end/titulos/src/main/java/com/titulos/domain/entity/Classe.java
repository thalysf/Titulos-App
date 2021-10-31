package com.titulos.domain.entity;

import java.util.Date;

import javax.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Classe {
	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private Long id;

	 private String nome;
	 
	 private Double valor;
	 
	 private Integer prazoDevolucao;
}
