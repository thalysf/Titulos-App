import { Cliente } from './../../../model/cliente/cliente.model';
import { Socio } from './../../../model/cliente/socio.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
  dependentes: Cliente[] = new Array();
  dependentesSelecionados: any;
  constructor(private router: Router) { }

  ngOnInit(): void {

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
