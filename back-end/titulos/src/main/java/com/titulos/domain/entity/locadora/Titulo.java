package com.titulos.domain.entity.locadora;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Titulo {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long idTitulo;
	 @NotNull
	 private String nome;
	 @NotNull
	 private String ano;
	 @NotNull
	 private String categoria;
	 @NotNull
	 private String sinopse;
	 
	 @ManyToOne
	 @NotNull
	 @JoinColumn(name = "idDiretor")
	 private Diretor diretor;
	 
	 @ManyToOne
	 @NotNull
	 @JoinColumn(name = "idClasse")
	 private Classe classe;
	 
	 @ManyToMany
	 @NotNull
	 @JoinTable(name="ator_titulo", joinColumns= {@JoinColumn(name="idTitulo")}, inverseJoinColumns= {@JoinColumn(name="idAtor")})
	 private List<Ator> atores;
}
