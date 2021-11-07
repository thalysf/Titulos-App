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
    this.clientes = [
      {id_cliente: 1, nome: "Carol", numInscricao: 5445561, dataNascimento: "10/05/1999", sexo: "feminino", ativo: true},
      {id_cliente: 2, nome: "Igor", numInscricao: 1689561, dataNascimento: "30/01/2000", sexo: "masculino", ativo: true},
      {id_cliente: 3, nome: "Eduarda", numInscricao: 9982800, dataNascimento: "16/06/1998", sexo: "feminino", ativo: false}
    ];
  }


  delete(id: String): void{
    // this.productService.delete(id);
    alert("Deletar cliente " + id + " ainda não funcional! Ajustar Backend!");
  }
}
