package com.titulos.service.locadora;

import com.titulos.domain.dto.locadora.AtorDto;
import com.titulos.domain.dto.locadora.TituloDto;
import com.titulos.domain.mapper.locadora.TituloMapper;
import com.titulos.repository.locadora.AtorRepository;
import com.titulos.repository.locadora.ClasseRepository;
import com.titulos.repository.locadora.DiretorRepository;
import com.titulos.repository.locadora.TituloRepository;
import com.titulos.util.commons.Validate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class TituloService {
    @Autowired
    private TituloRepository tituloRepository;

    @Autowired
    private TituloMapper tituloMapper;

    @Autowired
    private Validate validate;

    public TituloDto cadastrarTitulo(TituloDto tituloDto) {
        if(!validate.isNullOrEmpty(String.valueOf(tituloDto.getIdTitulo())))
        {
            throw new IllegalArgumentException("ID da titulo não deve ser enviado na inserção!");
        }
        isValidTitulo(tituloDto);
        var tituloEntity = tituloMapper.tituloDtoToTitulo(tituloDto);

        return tituloMapper.tituloToTituloDto(tituloRepository.save(tituloEntity));
    }

    public TituloDto atualizarTitulo(TituloDto tituloDto) {
        if(validate.isNullOrEmpty(String.valueOf(tituloDto.getIdTitulo())))
        {
            throw new IllegalArgumentException("ID da titulo não pode estar vazio ou nulo");
        }
        isValidTitulo(tituloDto);
        listarTitulo(String.valueOf(tituloDto.getIdTitulo()));
        var tituloEntity = tituloMapper.tituloDtoToTitulo(tituloDto);
        return tituloMapper.tituloToTituloDto(tituloRepository.save(tituloEntity));
    }

    public void deletarTitulo(String id_titulo) {
        if (validate.isNullOrEmpty(id_titulo)) {
            throw new IllegalArgumentException("ID da titulo não pode estar vazio ou nulo");
        }

        var idTitulo = Long.parseLong(id_titulo);
        try {
            tituloRepository.deleteById(idTitulo);
        } catch (EmptyResultDataAccessException e) {
            throw new EntityNotFoundException("Titulo de id " + id_titulo + " não existe! Portanto não pode ser deletada!");
        }
    }

    public TituloDto listarTitulo(String id_titulo) {
        var idTitulo = Long.parseLong(id_titulo);
        TituloDto tituloDto = new TituloDto();
        try {
            tituloDto = tituloMapper.tituloToTituloDto(tituloRepository.getById(idTitulo));
        } catch (EntityNotFoundException e) {
            throw new EntityNotFoundException("Titulo de id " + id_titulo + " não encontrada! Operação não pode ser efetuada!");
        }
        return tituloDto;
    }

    public List<TituloDto> listarTituloes() {
        return tituloMapper.listTituloToListTituloDto(tituloRepository.findAll());
    }

    private void isValidTitulo(TituloDto tituloDto) {
        // Validações de preencimento de campos
        String illegalArgumentsErrosMsg  = "";
        if (validate.isNullOrEmpty(tituloDto.getNome())) {
            illegalArgumentsErrosMsg += "Nome do título não pode ser nulo ou vazio! ";
        }
        if (validate.isNullOrEmpty(tituloDto.getAno()) || !(Integer.parseInt(tituloDto.getAno()) >= 1 && Integer.parseInt(tituloDto.getAno()) <= 9999)) {
            illegalArgumentsErrosMsg += "Ano do título não pode estar vazio ou nulo e deve estar no formato YYYY! ";
        }
        if(validate.isNullOrEmpty(tituloDto.getCategoria())){
            illegalArgumentsErrosMsg += "Categoria do título não pode ser nula ou vazia! ";
        }
        if(validate.isNullOrEmpty(tituloDto.getSinopse())){
            illegalArgumentsErrosMsg += "Sinopse do título não pode ser nula ou vazia! ";
        }
        if(tituloDto.getClasse() == null || validate.isNullOrEmpty(String.valueOf(tituloDto.getClasse().getIdClasse()))){
            illegalArgumentsErrosMsg += "Classe do título deve ser informada! ";
        }
        if(tituloDto.getDiretor() == null || validate.isNullOrEmpty(String.valueOf(tituloDto.getDiretor().getIdDiretor()))){
            illegalArgumentsErrosMsg += "Diretor do título deve ser informada! ";
        }
        if(tituloDto.getAtores() == null ||tituloDto.getAtores().size() == 0){
            illegalArgumentsErrosMsg += "Ao menos UM ator deve ser informado para o título! ";
        }

        if(!illegalArgumentsErrosMsg.isEmpty())
            throw new IllegalArgumentException(illegalArgumentsErrosMsg);
    }
}
