import { Ator } from './../../../../locadora/model/ator/ator.model';
import { Item } from './../../../../locadora/model/item/item.model';
import { Titulo } from 'src/app/components/locadora/model/titulo/titulo.model';
import { Cliente } from './../../../model/cliente/cliente.model';
import { Locacao } from './../../../model/locacao/locacao.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locacao-read',
  templateUrl: './locacao-read.component.html',
  styleUrls: ['./locacao-read.component.css']
})
export class LocacaoReadComponent implements OnInit {
  locacoes: Locacao[] = new Array();
  clientes: Cliente[] = new Array();
  atores: Ator[] = new Array();
  titulos: Titulo[] = new Array();
  itens: Item[] = new Array();
  displayedColumns = ['id', 'dataLocacao', 'dataDevolucaoPrevista', 'dataDevolucaoEfetiva', 'valorCobrado', 'multaCobrada', 'item', 'cliente', 'action'];
  constructor() { }

  ngOnInit(): void {
    this.atores = [
      { id_ator: 1, nome: "Joao" },
      { id_ator: 2, nome: "Carla" },
      { id_ator: 3, nome: "Ana" },
      { id_ator: 4, nome: "Andrea" },
      { id_ator: 5, nome: "Maria" }]
    this.clientes = [
      {id_cliente: 1, nome: "Carol", numInscricao: 5445561, dataNascimento: "10/05/1999", sexo: "feminino", ativo: true},
      {id_cliente: 2, nome: "Igor", numInscricao: 1689561, dataNascimento: "30/01/2000", sexo: "masculino", ativo: true}
    ];
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

     this.locacoes = [
        {id_locacao: 1, dataLocacao: "20/10/2021", dataDevolucaoPrevista: "20/11/2021", dataDevolucaoEfetiva: "19/11/2021", 
        valorCobrado: 120, multaCobrada: 0, item: this.itens[0], cliente: this.clientes[0]},
        {id_locacao: 2, dataLocacao: "15/09/2021", dataDevolucaoPrevista: "15/10/2021", dataDevolucaoEfetiva: "01/11/2021", 
        valorCobrado: 190, multaCobrada: 70, item: this.itens[1], cliente: this.clientes[1]}
     ];
  }

  delete(id: String): void{
    // this.productService.delete(id);
    alert("Deletar locação " + id + " ainda não funcional! Ajustar Backend!");
  }
}
