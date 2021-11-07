import { Cliente } from './../../../model/cliente/cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {
  clientes: Cliente[] = new Array();
  displayedColumns = ['id', 'nome', 'numInscricao', 'dataNascimento', 'sexo', 'ativo', 'action'];
  constructor() { }

  ngOnInit(): void {

  }


  delete(id: String): void{
    // this.productService.delete(id);
    alert("Deletar cliente " + id + " ainda não funcional! Ajustar Backend!");
  }
}
