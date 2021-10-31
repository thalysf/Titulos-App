import { Ator } from './../../../../locadora/model/ator/ator.model';
import { Titulo } from './../../../../locadora/model/titulo/titulo.model';
import { Item } from './../../../../locadora/model/item/item.model';
import { Cliente } from './../../../model/cliente/cliente.model';
import { Locacao } from './../../../model/locacao/locacao.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locacao-update',
  templateUrl: './locacao-update.component.html',
  styleUrls: ['./locacao-update.component.css']
})
export class LocacaoUpdateComponent implements OnInit {
  titulos: Titulo[] = new Array();
  itens: Item[] = new Array();
  atores: Ator[] = new Array();
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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.atores = [
      { id: 1, nome: "Joao" },
      { id: 2, nome: "Carla" },
      { id: 3, nome: "Ana" },
      { id: 4, nome: "Andrea" },
      { id: 5, nome: "Maria" }]
    this.clientes = [
      {id: 1, nome: "Carol", numInscricao: 5445561, dataNascimento: "10/05/1999", sexo: "feminino", ativo: true},
      {id: 2, nome: "Igor", numInscricao: 1689561, dataNascimento: "30/01/2000", sexo: "masculino", ativo: true},
      {id: 3, nome: "Eduarda", numInscricao: 9982800, dataNascimento: "16/06/1998", sexo: "feminino", ativo: false}
    ];

    this.titulos = [
      { id: 1, nome: "Era uma vez", ano: "2021", sinopse: "o amor é furada", categoria: "ficção", diretor: "Carla", classe: "ouro", 
      atores: this.atores
      },
      { id: 2, nome: "Era do gelo", ano: "2009", sinopse: "filme gelado e engraçado", categoria: "aventura", diretor: "Jack", classe: "diamante", 
      atores: this.atores
      }
      ];

    this.itens = [
      {id: 1, titulo: this.titulos[0], dataAquisicao: "10/10/2021", numeroSerie: 5465251, tipo: "DVD"},
      {id: 2, titulo: this.titulos[1], dataAquisicao: "11/10/2021", numeroSerie: 7669100, tipo: "BLUERAY"}
  ];
  }

  updateLocacao(): void{
    const id = this.route.snapshot.paramMap.get('id') || "";
    alert("Locação ainda não pode ser atualizada, id: "+ id + "! Ajustar backend!");
    //this.ProductService.update(this.product).subscribe(() => this.ProductService.showMsg("Produto alterado com sucesso! Recarregue a página para atualizar!"));
    //this.router.navigate(['/locacao']);
  }

  cancel(): void{
    this.router.navigate(['/locacao']);
  }
}
