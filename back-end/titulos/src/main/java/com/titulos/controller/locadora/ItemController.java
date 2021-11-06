package com.titulos.controller.locadora;

import com.titulos.domain.dto.locadora.ItemDto;
import com.titulos.service.locadora.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Validated
@RequestMapping("/locadora/item")
public class ItemController {
    @Autowired
    ItemService itemService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ItemDto cadastraItem(@Valid @RequestBody ItemDto itemDto)
    {
        return itemService.cadastrarItem(itemDto);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public ItemDto atualizarItem(@Valid @RequestBody ItemDto itemDto)
    {
        return itemService.atualizarItem(itemDto);
    }

    @DeleteMapping("/{id_item}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarItem(@PathVariable String id_item)
    {
        itemService.deletarItem(id_item);
    }

    @GetMapping("/{id_item}")
    @ResponseStatus(HttpStatus.OK)
    public ItemDto listarItem(@PathVariable String id_item)
    {
        return itemService.listarItem(id_item);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ItemDto> listarItemes()
    {
        return itemService.listarItemes();
    }
}
