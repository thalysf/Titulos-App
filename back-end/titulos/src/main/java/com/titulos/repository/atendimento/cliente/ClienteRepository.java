package com.titulos.repository.atendimento.cliente;

import com.titulos.domain.entity.atendimento.cliente.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
