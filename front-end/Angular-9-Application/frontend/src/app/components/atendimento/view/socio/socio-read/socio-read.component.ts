import { Cliente } from './../../../model/cliente/cliente.model';
import { Socio } from './../../../model/cliente/socio.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socio-read',
  templateUrl: './socio-read.component.html',
  styleUrls: ['./socio-read.component.css']
})
export class SocioReadComponent implements OnInit {
  socios: Socio[] = new Array();
  dependentesLais: Cliente[] = new Array();
  dependentesFabiano: Cliente[] = new Array();


  displayedColumns = ['id', 'nome', 'numInscricao', 'dataNascimento', 'sexo', 'ativo', 'cpf', 'endereco', 'tel', 'dependentes', 'action'];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dependentesLais = [
      {id_cliente: 4, nome: "Carol", numInscricao: 9445561, dataNascimento: "10/05/2007", sexo: "feminino", ativo: true},
      {id_cliente: 5, nome: "Igor", numInscricao: 1789561, dataNascimento: "30/01/2009", sexo: "masculino", ativo: true}
    ];

    this.dependentesFabiano = [
      {id_cliente: 6, nome: "Ana", numInscricao: 5445561, dataNascimento: "10/05/2009", sexo: "feminino", ativo: true},
      {id_cliente: 7, nome: "Julio", numInscricao: 3689561, dataNascimento: "30/01/2006", sexo: "masculino", ativo: true}
    ];

    this.socios = [
      {id_socio: 1, nome: "Laís", numInscricao: 5445561, dataNascimento: "10/05/1999", sexo: "feminino", ativo: true, cpf: "550.255.480-55", 
      endereco: "Rua das Flores", tel: "(31) 99975-6210", dependentes: this.dependentesLais
      },
      {id_socio: 2, nome: "Fabiano", numInscricao: 5445561, dataNascimento: "10/05/1998", sexo: "masculino", ativo: true, cpf: "893.468.970-66", 
      endereco: "Rua das Acácias", tel: "(27) 98795-5201", dependentes: this.dependentesFabiano
      },
    ];
    
  }
  delete(id: String): void{
    // this.productService.delete(id);
    alert("Deletar sócio " + id + " ainda não funcional! Ajustar Backend!");
  }
}
