package com.titulos.repository.atendimento.locacao;

import com.titulos.domain.entity.atendimento.locacao.Locacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LocacaoRepository extends JpaRepository<Locacao, Long> {
    Optional<List<Locacao>> findAllByClienteIdCliente(Long idCliente);
    Optional<List<Locacao>> findAllBySocioIdSocio(Long idSocio);
}
