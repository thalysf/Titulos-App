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


  displayedColumns = ['id', 'nome', 'numInscricao', 'dataNascimento', 'sexo', 'ativo', 'cpf', 'endereco', 'tel', 'dependentes', 'action'];
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  delete(id: String): void{
    // this.productService.delete(id);
    alert("Deletar sócio " + id + " ainda não funcional! Ajustar Backend!");
  }
}
