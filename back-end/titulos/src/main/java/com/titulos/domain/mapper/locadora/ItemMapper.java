package com.titulos.domain.mapper.locadora;

import com.titulos.domain.dto.locadora.ItemDto;
import com.titulos.domain.entity.locadora.Item;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ItemMapper {
    ItemDto itemToItemDto(Item item);
    Item itemDtoToItem(ItemDto itemDto);

    List<ItemDto> listItemToListItemDto(List<Item> itens);
}
