import { Socio } from './../../../model/cliente/socio.model';
import { Ator } from './../../../../locadora/model/ator/ator.model';
import { Titulo } from './../../../../locadora/model/titulo/titulo.model';
import { Item } from './../../../../locadora/model/item/item.model';
import { Cliente } from './../../../model/cliente/cliente.model';
import { Locacao } from './../../../model/locacao/locacao.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LocacaoService } from '../../../service/locacao.service';
import { ItemService } from 'src/app/components/locadora/service/item.service';
import { ClienteService } from '../../../service/cliente.service';
import { SocioService } from '../../../service/socio.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-locacao-update',
  templateUrl: './locacao-update.component.html',
  styleUrls: ['./locacao-update.component.css']
})
export class LocacaoUpdateComponent implements OnInit {
  titulos: Titulo[] = new Array();
  itens: Item[] = new Array();
  clientes: Cliente[] = new Array();
  socios: Socio[] = new Array();
  cliente!: Cliente;
  socio!: Socio;
  item!: Item;
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

  constructor(private router: Router, private route: ActivatedRoute, private locacaoService: LocacaoService, 
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

    const id = this.route.snapshot.paramMap.get('id') || "";
    this.locacaoService.readById(id)
    .pipe(
      catchError((err) => {
        this.locacaoService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe((locacao) =>{
      this.locacao = locacao;
      console.log(this.locacao);
    })
   
  }

  updateLocacao(): void{
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.locacaoService.update(this.locacao)
    .pipe(
      catchError((err) => {
        this.locacaoService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe(() => 
    {
        this.locacaoService.showMsg("Locação alterada com sucesso!")
        this.router.navigate(['/locacao'])
    });
  }

  cancel(): void{
    this.router.navigate(['/locacao']);
  }
}
