package com.titulos.repository.atendimento.locacao;

import com.titulos.domain.entity.atendimento.locacao.Locacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocacaoRepository extends JpaRepository<Locacao, Long> {
}
