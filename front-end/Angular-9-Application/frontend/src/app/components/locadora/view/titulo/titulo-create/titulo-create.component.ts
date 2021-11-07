import { Titulo } from 'src/app/components/locadora/model/titulo/titulo.model';
import { Router } from '@angular/router';
import { Ator } from './../../../model/ator/ator.model';
import { Classe } from './../../../model/classe/classe.model';
import { Diretor } from './../../../model/diretor/diretor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-create',
  templateUrl: './titulo-create.component.html',
  styleUrls: ['./titulo-create.component.css']
})
export class TituloCreateComponent implements OnInit {
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

  atoresSelecionados: any;
  diretores: Diretor[]  = new Array;
  classes: Classe[]  = new Array;
  atores: Ator[] = new Array();
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.diretores = [
      {id_diretor: 1, nome: "Carlos"},
      {id_diretor: 2, nome: "Anthony"},
      {id_diretor: 3, nome: "Ana"},
    ];
    this.classes = [
      { id_classe: 1, nome: "Bronze", valor: 1200, prazoDevolucao: 20},
      { id_classe: 2, nome: "Prata", valor: 3000, prazoDevolucao: 15},
      { id_classe: 3, nome: "Ouro", valor: 7000, prazoDevolucao: 10}
      ];
    this.atores = [
      { id_ator: 1, nome: "Joao" },
      { id_ator: 2, nome: "Carla" },
      { id_ator: 3, nome: "Ana" },
      { id_ator: 4, nome: "Andrea" },
      { id_ator: 5, nome: "Maria" },
      { id_ator: 6, nome: "Eduardo" }
      ];
  }
  createTitulo(): void{
    console.log(this.atoresSelecionados);
    alert("Titulo ainda não pode ser criado! Ajustar backend!");
    // this.productService.create(this.product).subscribe(() =>{
    //   this.productService.showMsg('Produto criado com sucesso!');
    //   this.router.navigate(['/titulo']);
    // });
  }

  cancel(): void{
    this.router.navigate(['/titulo']);
  }
}
