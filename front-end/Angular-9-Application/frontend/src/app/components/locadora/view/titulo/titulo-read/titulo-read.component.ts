import { Ator } from './../../../model/ator/ator.model';
import { Router } from '@angular/router';
import { Titulo } from 'src/app/components/locadora/model/titulo/titulo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-read',
  templateUrl: './titulo-read.component.html',
  styleUrls: ['./titulo-read.component.css']
})
export class TituloReadComponent implements OnInit {
  titulos: Titulo[] = new Array();
  atores: Ator[] = new Array();
  displayedColumns = ['id', 'nome', 'ano', 'sinopse', 'categoria', 'diretor', 'classe', 'atores', 'action'];
  constructor(private router: Router) {   }

  ngOnInit(): void {
    this.atores = [
      { id: 1, nome: "Joao" },
      { id: 2, nome: "Carla" },
      { id: 3, nome: "Ana" },
      { id: 4, nome: "Andrea" },
      { id: 5, nome: "Maria" }
      ];
    this.titulos = [
      { id: 1, nome: "Era uma vez", ano: "2021", sinopse: "o amor é furada", categoria: "ficção", diretor: "Carla", classe: "ouro", 
      atores:  this.atores
      },
      { id: 2, nome: "Era do gelo", ano: "2009", sinopse: "filme gelado e engraçado", categoria: "aventura", diretor: "Jack", classe: "diamante", 
      atores:  this.atores
      }
      ];
  }
  delete(id: String): void{
    // this.productService.delete(id);
    alert("Deletar título " + id + " ainda não funcional! Ajustar Backend!");
  }
}
