import { Titulo } from 'src/app/components/locadora/model/titulo/titulo.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Ator } from './../../../model/ator/ator.model';
import { Classe } from './../../../model/classe/classe.model';
import { Diretor } from './../../../model/diretor/diretor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-update',
  templateUrl: './titulo-update.component.html',
  styleUrls: ['./titulo-update.component.css']
})
export class TituloUpdateComponent implements OnInit {
  //titulo!: Titulo; -> usar esse após o backend estar implementado
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

  constructor(private router: Router, private route: ActivatedRoute) { }

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
  updateTitulo(): void{
    console.log(this.atoresSelecionados);
    const id = this.route.snapshot.paramMap.get('id') || "";
    alert("Título ainda não pode ser atualizado, id: "+ id + "! Ajustar backend!");
    // this.productService.create(this.product).subscribe(() =>{
    //   this.productService.showMsg('Produto criado com sucesso!');
    //   this.router.navigate(['/ator']);
    // });

  }
  cancel(): void{
    this.router.navigate(['/titulo']);
  }
}
