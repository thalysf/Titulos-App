package com.titulos.repository.locadora;

import com.titulos.domain.entity.locadora.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
