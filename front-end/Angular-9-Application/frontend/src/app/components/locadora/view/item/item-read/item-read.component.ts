import { Ator } from './../../../model/ator/ator.model';
import { Titulo } from './../../../model/titulo/titulo.model';
import { Item } from './../../../model/item/item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-read',
  templateUrl: './item-read.component.html',
  styleUrls: ['./item-read.component.css']
})
export class ItemReadComponent implements OnInit {
  titulos: Titulo[] = new Array();
  itens: Item[] = new Array();
  atores: Ator[] = new Array();
  displayedColumns = ['id', 'titulo', 'dataAquisicao', 'tipo', 'action'];

  constructor() { }

  ngOnInit(): void {
    this.atores = [
      { id_ator: 1, nome: "Joao" },
      { id_ator: 2, nome: "Carla" },
      { id_ator: 3, nome: "Ana" },
      { id_ator: 4, nome: "Andrea" },
      { id_ator: 5, nome: "Maria" }]
    this.titulos = [
      { id_titulo: 1, nome: "Era uma vez", ano: "2021", sinopse: "o amor é furada", categoria: "ficção", diretor: "Carla", classe: "ouro", 
      atores: this.atores
      },
      { id_titulo: 2, nome: "Era do gelo", ano: "2009", sinopse: "filme gelado e engraçado", categoria: "aventura", diretor: "Jack", classe: "diamante", 
      atores: this.atores
      }
      ];

    this.itens = [
      {id_item: 1, titulo: this.titulos[0], dataAquisicao: "10/10/2021", numeroSerie: 5465251, tipo: "DVD"},
      {id_item: 2, titulo: this.titulos[1], dataAquisicao: "11/10/2021", numeroSerie: 7669100, tipo: "BLUERAY"}
  ];
  }

  delete(id: String): void{
    // this.productService.delete(id);
    alert("Deletar item " + id + " ainda não funcional! Ajustar Backend!");
  }
}
