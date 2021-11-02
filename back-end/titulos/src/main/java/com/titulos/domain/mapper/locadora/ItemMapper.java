package com.titulos.domain.mapper.locadora;

import com.titulos.domain.dto.locadora.ItemDto;
import com.titulos.domain.entity.locadora.Item;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ItemMapper {
    ItemDto itemToItemDto(Item item);
    Item itemDtoToItem(ItemDto itemDto);
}
