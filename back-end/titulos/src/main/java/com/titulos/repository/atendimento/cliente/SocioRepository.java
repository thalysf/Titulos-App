package com.titulos.repository.atendimento.cliente;

import com.titulos.domain.entity.atendimento.cliente.Socio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SocioRepository extends JpaRepository<Socio, Long> {
}
