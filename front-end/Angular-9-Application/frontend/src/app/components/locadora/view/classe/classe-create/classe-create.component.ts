import { Classe } from './../../../model/classe/classe.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classe-create',
  templateUrl: './classe-create.component.html',
  styleUrls: ['./classe-create.component.css']
})
export class ClasseCreateComponent implements OnInit {
  classe: Classe = {
    id_classe: 0,
    nome: "",
    valor: 0,
    prazoDevolucao: 0
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  createClasse(): void{
    alert("Classe ainda não pode ser criada! Ajustar backend!");
    // this.productService.create(this.product).subscribe(() =>{
    //   this.productService.showMsg('Produto criado com sucesso!');
    //   this.router.navigate(['/ator']);
    // });

  }
  cancel(): void{
    this.router.navigate(['/classe']);
  }
}
