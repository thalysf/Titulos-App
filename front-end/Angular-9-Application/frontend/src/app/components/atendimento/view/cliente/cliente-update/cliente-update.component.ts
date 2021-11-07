import { ClienteService } from './../../../service/cliente.service';
import { Cliente } from './../../../model/cliente/cliente.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {
  cliente: Cliente = {
    id_cliente: undefined,
    nome: undefined,
    num_inscricao: undefined,
    data_nascimento: undefined,
    sexo: undefined,
    ativo: true
  };
  ativoInativo: Array<string> = ['true', 'false'];
  constructor(private router: Router, private route: ActivatedRoute, private clienteService: ClienteService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.clienteService.readById(id)
    .pipe(
      catchError((err) => {
        this.clienteService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe((cliente) =>{
      this.cliente = cliente;
    })
  }
  updateCliente(): void{
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.clienteService.update(this.cliente)
    .pipe(
      catchError((err) => {
        this.clienteService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe(() => 
    {
        this.clienteService.showMsg("Cliente alterado com sucesso!")
        this.router.navigate(['/cliente'])
    });
  }
  cancel(): void{
    this.router.navigate(['/cliente']);
  }
}
