import { Router } from '@angular/router';
import { Cliente } from './../../../model/cliente/cliente.model';
import { Component, OnInit } from '@angular/core';

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
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  createCliente(): void{
    alert("Cliente ainda não pode ser criado! Ajustar backend!");
    // this.productService.create(this.product).subscribe(() =>{
    //   this.productService.showMsg('Produto criado com sucesso!');
    //   this.router.navigate(['/cliente']);
    // });
  }

  cancel(): void{
    this.router.navigate(['/cliente']);
  }
}
