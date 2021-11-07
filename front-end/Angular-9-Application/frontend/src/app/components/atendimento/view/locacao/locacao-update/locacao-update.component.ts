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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

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
