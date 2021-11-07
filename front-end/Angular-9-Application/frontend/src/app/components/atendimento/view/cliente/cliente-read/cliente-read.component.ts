import { ClienteService } from './../../../service/cliente.service';
import { Cliente } from './../../../model/cliente/cliente.model';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {
  clientes: Cliente[] = new Array();
  displayedColumns = ['id', 'nome', 'numInscricao', 'dataNascimento', 'sexo', 'ativo', 'action'];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes =>{
      this.clientes = clientes;
  });
  }


  delete(id: String): void{
    this.clienteService.delete(id).pipe(
      catchError((err) => {
        this.clienteService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })).subscribe(() =>{
        this.clienteService.showMsg("Cliente deletada com sucesso!");
        window.location.reload();
    });
  }
}
