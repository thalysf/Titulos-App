import { Socio } from './../../../model/cliente/socio.model';
import { Dependente } from './../../../model/cliente/dependente.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socio-create',
  templateUrl: './socio-create.component.html',
  styleUrls: ['./socio-create.component.css']
})
export class SocioCreateComponent implements OnInit {
  socio: Socio = {
    id: 0,
    numInscricao: 0,
    nome: "",
    dataNascimento: "",
    sexo: "",
    ativo: true,
    cpf: "",
    endereco: "",
    tel: "",
    dependentes: []
  }
  dependentes: Dependente[] = new Array();
  dependentesSelecionados: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dependentes = [
      {id: 1, nome: "Carol", numInscricao: 9445561, dataNascimento: "10/05/2007", sexo: "feminino", ativo: true},
      {id: 2, nome: "Igor", numInscricao: 1789561, dataNascimento: "30/01/2009", sexo: "masculino", ativo: true},
      {id: 3, nome: "Ana", numInscricao: 5445561, dataNascimento: "10/05/2009", sexo: "feminino", ativo: true},
      {id: 4, nome: "Julio", numInscricao: 3689561, dataNascimento: "30/01/2006", sexo: "masculino", ativo: true}
    ];
  }
  createSocio(): void{
    alert("Sócio ainda não pode ser criado! Ajustar backend!");
    // this.productService.create(this.product).subscribe(() =>{
    //   this.productService.showMsg('Produto criado com sucesso!');
    //   this.router.navigate(['/socio']);
    // });
  }

  cancel(): void{
    this.router.navigate(['/socio']);
  }
}
