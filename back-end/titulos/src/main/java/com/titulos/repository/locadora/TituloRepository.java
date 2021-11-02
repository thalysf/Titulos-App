package com.titulos.repository.locadora;

import com.titulos.domain.entity.locadora.Titulo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TituloRepository extends JpaRepository<Titulo, Long> {
}
