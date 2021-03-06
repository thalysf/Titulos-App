import { SocioService } from './../../../service/socio.service';
import { Socio } from './../../../model/cliente/socio.model';
import { ClienteService } from './../../../service/cliente.service';
import { ItemService } from './../../../../locadora/service/item.service';
import { LocacaoService } from './../../../service/locacao.service';
import { Ator } from './../../../../locadora/model/ator/ator.model';
import { Titulo } from './../../../../locadora/model/titulo/titulo.model';
import { Item } from './../../../../locadora/model/item/item.model';
import { Cliente } from './../../../model/cliente/cliente.model';
import { Locacao } from './../../../model/locacao/locacao.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

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
  socios: Socio[] = new Array();
  cliente!: Cliente;
  item!: Item;
  socio!: Socio;
  locacao: Locacao = {
    id_locacao: undefined,
    data_locacao: undefined,
    data_devolucao_prevista: undefined,
    data_devolucao_efetiva: undefined,
    valor_cobrado: undefined,
    multa_cobrada: undefined,
    cliente: this.cliente,
    socio: this.socio,
    item: this.item
  }

  constructor(private router: Router, private locacaoService: LocacaoService, 
    private itemService: ItemService, private clienteService: ClienteService, private socioService: SocioService) { }

  ngOnInit(): void {
    this.itemService.read().subscribe(itens =>{
      this.itens = itens;
    });
    this.clienteService.read().subscribe(clientes =>{
      this.clientes = clientes;
    });
    this.socioService.read().subscribe(socios =>{
      this.socios = socios;
    });
  }

  createLocacao(): void{
    this.locacaoService.create(this.locacao)
    .pipe(
      catchError((err) => {
        this.locacaoService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe(() =>{
      this.locacaoService.showMsg('Loca????o criada com sucesso!');
      this.router.navigate(['/locacao']);
    });
  }

  cancel(): void{
    this.router.navigate(['/locacao']);
  }
}
