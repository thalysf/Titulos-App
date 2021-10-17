import { Titulo } from './../../../../locadora/model/titulo/titulo.model';
import { Item } from './../../../../locadora/model/item/item.model';
import { Cliente } from './../../../model/cliente/cliente.model';
import { Locacao } from './../../../model/locacao/locacao.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locacao-create',
  templateUrl: './locacao-create.component.html',
  styleUrls: ['./locacao-create.component.css']
})
export class LocacaoCreateComponent implements OnInit {
  titulos: Titulo[] = new Array();
  itens: Item[] = new Array();
  clientes: Cliente[] = new Array();
  cliente!: Cliente;
  item!: Item;
  locacao: Locacao = {
    id: 0,
    dataLocacao: "",
    dataDevolucaoPrevista: "",
    dataDevolucaoEfetiva: "",
    valorCobrado: 0,
    multaCobrada: 0,
    cliente: this.cliente,
    item: this.item
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.clientes = [
      {id: 1, nome: "Carol", numInscricao: 5445561, dataNascimento: "10/05/1999", sexo: "feminino", ativo: true},
      {id: 2, nome: "Igor", numInscricao: 1689561, dataNascimento: "30/01/2000", sexo: "masculino", ativo: true},
      {id: 3, nome: "Eduarda", numInscricao: 9982800, dataNascimento: "16/06/1998", sexo: "feminino", ativo: false}
    ];

    this.titulos = [
      { id: 1, nome: "Era uma vez", ano: "2021", sinopse: "o amor é furada", categoria: "ficção", diretor: "Carla", classe: "ouro", 
      atores: ["joao", "ana", "carlos"]
      },
      { id: 2, nome: "Era do gelo", ano: "2009", sinopse: "filme gelado e engraçado", categoria: "aventura", diretor: "Jack", classe: "diamante", 
      atores: ["mamute", "tigre", "tartaruga"]
      }
      ];

    this.itens = [
      {id: 1, titulo: this.titulos[0], dataAquisicao: "10/10/2021", numeroSerie: 5465251, tipo: "DVD"},
      {id: 2, titulo: this.titulos[1], dataAquisicao: "11/10/2021", numeroSerie: 7669100, tipo: "BLUERAY"}
  ];

  }

  createLocacao(): void{
    alert("Locação ainda não pode ser criada! Ajustar backend!");
    // this.productService.create(this.product).subscribe(() =>{
    //   this.productService.showMsg('Produto criado com sucesso!');
    //   this.router.navigate(['/locacao']);
    // });
  }

  cancel(): void{
    this.router.navigate(['/locacao']);
  }
}
