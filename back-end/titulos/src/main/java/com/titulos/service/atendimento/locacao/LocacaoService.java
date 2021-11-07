package com.titulos.service.atendimento.locacao;

import com.titulos.domain.dto.atendimento.locacao.LocacaoDto;
import com.titulos.domain.entity.atendimento.locacao.Locacao;
import com.titulos.domain.mapper.atendimento.locacao.LocacaoMapper;
import com.titulos.domain.mapper.locadora.ItemMapper;
import com.titulos.repository.atendimento.cliente.ClienteRepository;
import com.titulos.repository.atendimento.locacao.LocacaoRepository;
import com.titulos.repository.locadora.ItemRepository;
import com.titulos.util.commons.Validate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Calendar;
import java.util.List;

@Service
public class LocacaoService {
    @Autowired
    private LocacaoRepository locacaoRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private LocacaoMapper locacaoMapper;

    @Autowired
    private ItemMapper itemMapper;

    @Autowired
    private Validate validate;

    public LocacaoDto cadastrarLocacao(LocacaoDto locacaoDto) {
        if (!validate.isNullOrEmpty(String.valueOf(locacaoDto.getIdLocacao()))) {
            throw new IllegalArgumentException("ID do locacao não deve ser enviado na inserção!");
        }
        // Calculando valor e data de devolução prevista

        var itemDto = itemRepository.findById(locacaoDto.getItem().getIdItem())
                .orElseThrow(() -> new EntityNotFoundException("Item de id " + locacaoDto.getItem().getIdItem() + " não encontrado! Operação não pode ser efetuada!"));

        locacaoDto.setValorCobrado(itemDto.getTitulo().getClasse().getValor());
        var diasParaDevolucao = itemDto.getTitulo().getClasse().getPrazoDevolucao();

        Calendar cal = Calendar.getInstance();
        cal.setTime(locacaoDto.getDataLocacao());
        cal.add(Calendar.DATE, diasParaDevolucao);

        locacaoDto.setDataDevolucaoPrevista(cal.getTime());

        isValidLocacaoToInsert(locacaoDto);

        var locacaoEntity = locacaoMapper.locacaoDtoToLocacao(locacaoDto);
        return locacaoMapper.locacaoToLocacaoDto(locacaoRepository.save(locacaoEntity));
    }

    public LocacaoDto atualizarLocacao(LocacaoDto locacaoDto) {
        if (validate.isNullOrEmpty(String.valueOf(locacaoDto.getIdLocacao()))) {
            throw new IllegalArgumentException("ID do locacao não pode estar vazio ou nulo");
        }
        isValidLocacaoToUpdate(locacaoDto);

        // Cálculo da multa: multa fixa de 10% do valor pago + 3 R$ o dia de atraso em contraste com a data de devolução prevista
        int diasEmAtraso = Math.toIntExact(((locacaoDto.getDataDevolucaoEfetiva().getTime() - locacaoDto.getDataDevolucaoPrevista().getTime()) / 86400000L));
        double multa = 0D;
        if(diasEmAtraso > 0) {
            multa = (locacaoDto.getValorCobrado() * 0.1) + (diasEmAtraso * 3);
        }
        locacaoDto.setMultaCobrada(multa);
        var locacaoEntity = locacaoMapper.locacaoDtoToLocacao(locacaoDto);
        return locacaoMapper.locacaoToLocacaoDto(locacaoRepository.save(locacaoEntity));
    }

    public void deletarLocacao(String id_locacao) {
        if (validate.isNullOrEmpty(id_locacao)) {
            throw new IllegalArgumentException("ID do locacao não pode estar vazio ou nulo");
        }

        var idLocacao = Long.parseLong(id_locacao);
        try {
            locacaoRepository.deleteById(idLocacao);
        } catch (EmptyResultDataAccessException e) {
            throw new EntityNotFoundException("Locacao de id " + id_locacao + " não existe! Portanto não pode ser deletado!");
        }
    }

    public LocacaoDto listarLocacao(String id_locacao) {
        return locacaoMapper
                .locacaoToLocacaoDto(
                        locacaoRepository
                                .findById(Long.parseLong(id_locacao))
                                .orElseThrow(() -> new EntityNotFoundException("Locação de id " + id_locacao + " não encontrado! Operação não pode ser efetuada!")));
    }

    public List<LocacaoDto> listarLocacoes() {
        return locacaoMapper.listLocacaoToListLocacaoDto(locacaoRepository.findAll());
    }

    private void isValidLocacaoToInsert(LocacaoDto locacaoDto) {
        // Validando campos
        String illegalArgumentsErrosMsg = "";
        if (locacaoDto.getDataLocacao() == null) {
            illegalArgumentsErrosMsg += "Data da locação deve ser informada!";
        }
        if(locacaoDto.getDataDevolucaoEfetiva() != null)
        {
            illegalArgumentsErrosMsg += "Data de devolução efetiva deve ser informada apenas no UPDATE da  locação!";
        }
        if(locacaoDto.getDataDevolucaoEfetiva() != null)
        {
            illegalArgumentsErrosMsg += "Data de devolução efetiva deve ser informada apenas no UPDATE da  locação!";
        }
        if(locacaoDto.getMultaCobrada() != null)
        {
            illegalArgumentsErrosMsg += "Multa cobrada é calculada após a devolução feita por meio do UPATE da locação, portanto campo não deve ser informado!";
        }
        if(locacaoDto.getCliente() == null && locacaoDto.getSocio() == null)
        {
            illegalArgumentsErrosMsg += "Cliente ou sócio deve ser informado na locação!";
        }
        if(locacaoDto.getItem() == null)
        {
            illegalArgumentsErrosMsg += "Item da locação deve ser informada!";
        }
        if(locacaoDto.getCliente() != null && locacaoDto.getSocio() != null)
        {
            illegalArgumentsErrosMsg += "Uma locação pode estar associada apenas a um cliente ou sócio! Não a ambos!";
        }
        // Validando se o cliente ou sócio já possui uma locação ativa e que não efetuou a devolução
        else if(locacaoDto.getCliente() != null) {
            var locacoesCliente = locacaoRepository.findAllByClienteIdCliente(locacaoDto.getCliente().getIdCliente());

            if (locacoesCliente.isPresent()) {
                for (Locacao locacao : locacoesCliente.get()) {
                    if (locacao.getDataDevolucaoEfetiva() == null) {
                        illegalArgumentsErrosMsg += "Ainda existem locações pendentes para o cliente de id " + locacaoDto.getCliente().getIdCliente() + "!";
                        break;
                    }
                }
            }
        }
        else {
            var locacoesSocio = locacaoRepository.findAllBySocioIdSocio(locacaoDto.getSocio().getIdSocio());

            if (locacoesSocio.isPresent()) {
                for (Locacao locacao : locacoesSocio.get()) {
                    if (locacao.getDataDevolucaoEfetiva() == null) {
                        illegalArgumentsErrosMsg += "Ainda existem locações pendentes para o sócio de id " + locacaoDto.getSocio().getIdSocio() + "!";
                        break;
                    }
                }
            }
        }
        if (!illegalArgumentsErrosMsg.isEmpty())
            throw new IllegalArgumentException(illegalArgumentsErrosMsg);
    }

    private void isValidLocacaoToUpdate(LocacaoDto locacaoDto) {
        // Validando campos
        String illegalArgumentsErrosMsg = "";
        if (locacaoDto.getDataLocacao() == null) {
            illegalArgumentsErrosMsg += "Data da locação deve ser informada!";
        }
        if (locacaoDto.getDataDevolucaoPrevista() == null) {
            illegalArgumentsErrosMsg += "Data da locação prevista deve ser informada!";
        }
        if (locacaoDto.getValorCobrado() == null) {
            illegalArgumentsErrosMsg += "Valor Cobrado da locação prevista deve ser informada!";
        }
        if (locacaoDto.getDataDevolucaoEfetiva() == null
                || locacaoDto.getDataDevolucaoEfetiva().getTime() < locacaoDto.getDataLocacao().getTime()
        ) {
            illegalArgumentsErrosMsg += "Data da devolução efetiva deve ser informada & Data da devolução efetiva deve ser maior ou igual a data de locação!";
        }
        if(locacaoDto.getCliente() == null && locacaoDto.getSocio() == null)
        {
            illegalArgumentsErrosMsg += "Cliente ou sócio deve ser informado na locação!";
        }
        if(locacaoDto.getItem() == null)
        {
            illegalArgumentsErrosMsg += "Item da locação deve ser informada!";
        }
        if(locacaoDto.getCliente() != null && locacaoDto.getSocio() != null)
        {
            illegalArgumentsErrosMsg += "Uma locação pode estar associada apenas a um cliente ou sócio! Não a ambos!";
        }
        if (!illegalArgumentsErrosMsg.isEmpty())
            throw new IllegalArgumentException(illegalArgumentsErrosMsg);
    }
}
