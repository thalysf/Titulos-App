import { Ator } from './../../../../locadora/model/ator/ator.model';
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
  atores: Ator[] = new Array();
  clientes: Cliente[] = new Array();
  cliente!: Cliente;
  item!: Item;
  locacao: Locacao = {
    id_locacao: undefined,
    data_locacao: undefined,
    data_devolucao_prevista: undefined,
    data_devolucao_efetiva: undefined,
    valor_cobrado: undefined,
    multa_cobrada: undefined,
    cliente: this.cliente,
    item: this.item
  }

  constructor(private router: Router) { }

  ngOnInit(): void {

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
