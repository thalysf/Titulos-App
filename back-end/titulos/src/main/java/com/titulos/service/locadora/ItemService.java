package com.titulos.service.locadora;

import com.titulos.domain.dto.locadora.ItemDto;
import com.titulos.domain.mapper.locadora.ItemMapper;
import com.titulos.repository.locadora.ItemRepository;
import com.titulos.util.commons.Validate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class ItemService {
    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private ItemMapper itemMapper;

    @Autowired
    private Validate validate;

    public ItemDto cadastrarItem(ItemDto itemDto) {
        if(!validate.isNullOrEmpty(String.valueOf(itemDto.getIdItem())))
        {
            throw new IllegalArgumentException("ID do item não deve ser enviado na inserção!");
        }
        isValidItem(itemDto);
        var itemEntity = itemMapper.itemDtoToItem(itemDto);

        return itemMapper.itemToItemDto(itemRepository.save(itemEntity));
    }

    public ItemDto atualizarItem(ItemDto itemDto) {
        if(validate.isNullOrEmpty(String.valueOf(itemDto.getIdItem())))
        {
            throw new IllegalArgumentException("ID do item não pode estar vazio ou nulo");
        }
        isValidItem(itemDto);
        listarItem(String.valueOf(itemDto.getIdItem()));
        var itemEntity = itemMapper.itemDtoToItem(itemDto);
        return itemMapper.itemToItemDto(itemRepository.save(itemEntity));
    }

    public void deletarItem(String id_item) {
        if (validate.isNullOrEmpty(id_item)) {
            throw new IllegalArgumentException("ID do item não pode estar vazio ou nulo");
        }

        var idItem = Long.parseLong(id_item);
        try {
            itemRepository.deleteById(idItem);
        } catch (EmptyResultDataAccessException e) {
            throw new EntityNotFoundException("Item de id " + id_item + " não existe! Portanto não pode ser deletada!");
        }
    }

    public ItemDto listarItem(String id_item) {
        var idItem = Long.parseLong(id_item);
        ItemDto itemDto = new ItemDto();
        try {
            itemDto = itemMapper.itemToItemDto(itemRepository.getById(idItem));
        } catch (EntityNotFoundException e) {
            throw new EntityNotFoundException("Item de id " + id_item + " não encontrada! Operação não pode ser efetuada!");
        }
        return itemDto;
    }

    public List<ItemDto> listarItemes() {
        return itemMapper.listItemToListItemDto(itemRepository.findAll());
    }

    private void isValidItem(ItemDto itemDto) {
        // Validações de preencimento de campos
        String illegalArgumentsErrosMsg  = "";
        if (itemDto.getNumeroSerie() <= 0) {
            illegalArgumentsErrosMsg += "Número de série do item não pode ser menor ou igual a zero! ";
        }
        if (!(itemDto.getTipo().equalsIgnoreCase("DVD") ||
                itemDto.getTipo().equalsIgnoreCase("BLUERAY") ||
                itemDto.getTipo().equalsIgnoreCase("FITA"))

        ) {
            illegalArgumentsErrosMsg += "Tipo do item deve ser ou DVD ou BLUERAY ou FITA! ";
        }

        if(!illegalArgumentsErrosMsg.isEmpty())
            throw new IllegalArgumentException(illegalArgumentsErrosMsg);
    }
}
