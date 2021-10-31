import { Ator } from './../../../model/ator/ator.model';
import { Item } from './../../../model/item/item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Titulo } from '../../../model/titulo/titulo.model';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {

  titulo: Titulo = {
    id: 0,
    nome: "",
    ano: "",
    sinopse: "",
    categoria: "",
    diretor: "",
    classe: "",
    atores: []
  }

  // item!: Item; -> usar esse após o backend estar implementado
  item: Item = {
    id: 0,
    dataAquisicao: "",
    numeroSerie: 0,
    tipo: "",
    titulo: this.titulo
  };
  titulos: Titulo[] = new Array();
  atores: Ator[] = new Array();
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.atores = [
      { id: 1, nome: "Joao" },
      { id: 2, nome: "Carla" },
      { id: 3, nome: "Ana" },
      { id: 4, nome: "Andrea" },
      { id: 5, nome: "Maria" }]
    this.titulos = [
      { id: 1, nome: "Era uma vez", ano: "2021", sinopse: "o amor é furada", categoria: "ficção", diretor: "Carla", classe: "ouro", 
      atores:  this.atores
      },
      { id: 2, nome: "Era do gelo", ano: "2009", sinopse: "filme gelado e engraçado", categoria: "aventura", diretor: "Jack", classe: "diamante", 
      atores:  this.atores
      }
      ];
  }

  updateItem(): void{
    const id = this.route.snapshot.paramMap.get('id') || "";
    alert("Item ainda não pode ser atualizado, id: "+ id + "! Ajustar backend!");
    //this.ProductService.update(this.product).subscribe(() => this.ProductService.showMsg("Produto alterado com sucesso! Recarregue a página para atualizar!"));
    //this.router.navigate(['/item']);
  }

  cancel(): void{
    this.router.navigate(['/item']);
  }
}
