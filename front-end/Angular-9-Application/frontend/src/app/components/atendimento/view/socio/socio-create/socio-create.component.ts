import { ClienteService } from './../../../service/cliente.service';
import { SocioService } from './../../../service/socio.service';
import { Cliente } from './../../../model/cliente/cliente.model';
import { Socio } from './../../../model/cliente/socio.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Component({
  selector: 'app-socio-create',
  templateUrl: './socio-create.component.html',
  styleUrls: ['./socio-create.component.css']
})
export class SocioCreateComponent implements OnInit {
  socio: Socio = {
    id_socio: undefined,
    num_inscricao: undefined,
    nome: undefined,
    data_nascimento: undefined,
    sexo: undefined,
    ativo: true,
    cpf: undefined,
    endereco: undefined,
    tel: undefined,
    dependentes: []
  }
  ativoInativo: Array<string> = ['true', 'false'];
  dependentes: Cliente[] = new Array();
  constructor(private router: Router, private socioService: SocioService, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(dependentes =>{
      this.dependentes = dependentes;
  });
  }
  createSocio(): void{
    this.socioService.create(this.socio)
    .pipe(
      catchError((err) => {
        this.socioService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe(() =>{
      this.socioService.showMsg('Sócio criado com sucesso!');
      this.router.navigate(['/socio']);
    });
  }

  cancel(): void{
    this.router.navigate(['/socio']);
  }
}
