import { Item } from './../../../model/item/item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-read',
  templateUrl: './item-read.component.html',
  styleUrls: ['./item-read.component.css']
})
export class ItemReadComponent implements OnInit {
  itens: Item[] = new Array();
  displayedColumns = ['id', 'titulo', 'dataAquisicao', 'tipo', 'action'];

  constructor() { }

  ngOnInit(): void {
    this.itens = [
      {id: 1, titulo: "Era do Gelo", dataAquisicao: "10/10/2021", numeroSerie: 5465251, tipo: "DVD"},
      {id: 2, titulo: "Era uma vez", dataAquisicao: "11/10/2021", numeroSerie: 7669100, tipo: "BLUERAY"}
  ];
  }

  delete(id: String): void{
    // this.productService.delete(id);
    alert("Deletar item " + id + " ainda não funcional! Ajustar Backend!");
  }
}
