import { ClienteService } from './../../../service/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from './../../../model/cliente/cliente.model';
import { Component, OnInit } from '@angular/core';
import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {
  cliente: Cliente = {
    id_cliente: undefined,
    nome: undefined,
    num_inscricao: undefined,
    data_nascimento: undefined,
    sexo: undefined,
    ativo: true
  };
  ativoInativo: Array<string> = ['true', 'false'];
  constructor(private router: Router, private clienteService: ClienteService) { }

  ngOnInit(): void {
    
  }
  createCliente(): void{
    this.clienteService.create(this.cliente)
    .pipe(
      catchError((err) => {
        this.clienteService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe(() =>{
      this.clienteService.showMsg('Cliente criado com sucesso!');
      this.router.navigate(['/cliente']);
    });
  }

  cancel(): void{
    this.router.navigate(['/cliente']);
  }
}
