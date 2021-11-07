import { Ator } from './../../../model/ator/ator.model';
import { Titulo } from 'src/app/components/locadora/model/titulo/titulo.model';
import { Item } from './../../../model/item/item.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  titulo: Titulo = {
    id_titulo: 0,
    nome: "",
    ano: "",
    sinopse: "",
    categoria: "",
    diretor: "",
    classe: "",
    atores: []
  }

  item: Item = {
    id_item: 0,
    dataAquisicao: "",
    numeroSerie: 0,
    tipo: "",
    titulo: this.titulo
  };
  titulos: Titulo[] = new Array();
  atores: Ator[] = new Array();
  constructor(private router: Router) { }

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
  }

  createItem(): void{
    alert("Item ainda não pode ser criado! Ajustar backend!");
    // this.productService.create(this.product).subscribe(() =>{
    //   this.productService.showMsg('Produto criado com sucesso!');
    //   this.router.navigate(['/item']);
    // });
  }

  cancel(): void{
    this.router.navigate(['/item']);
  }
}
