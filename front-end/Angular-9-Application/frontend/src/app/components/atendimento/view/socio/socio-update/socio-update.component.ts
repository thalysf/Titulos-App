import { ClienteService } from './../../../service/cliente.service';
import { SocioService } from './../../../service/socio.service';
import { Cliente } from './../../../model/cliente/cliente.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Socio } from './../../../model/cliente/socio.model';
import { Component, OnInit } from '@angular/core';
import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Component({
  selector: 'app-socio-update',
  templateUrl: './socio-update.component.html',
  styleUrls: ['./socio-update.component.css']
})
export class SocioUpdateComponent implements OnInit {
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
  dependentesSelecionados: any;
  constructor(private router: Router, private route: ActivatedRoute, private socioService: SocioService, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(dependentes =>{
      this.dependentes = dependentes;
  });

    const id = this.route.snapshot.paramMap.get('id') || "";
    this.socioService.readById(id)
    .pipe(
      catchError((err) => {
        this.socioService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe((socio) =>{
      this.socio = socio;
    })
  }
  updateSocio(): void{
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.socioService.update(this.socio)
    .pipe(
      catchError((err) => {
        this.socioService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe(() => 
    {
        this.socioService.showMsg("Sócio alterado com sucesso!")
        this.router.navigate(['/socio'])
    });
  }

  cancel(): void{
    this.router.navigate(['/socio']);
  }
}
