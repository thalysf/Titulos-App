import { Ator } from './../../../model/ator/ator.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ator-create',
  templateUrl: './ator-create.component.html',
  styleUrls: ['./ator-create.component.css']
})
export class AtorCreateComponent implements OnInit {
  ator: Ator = {
    id: 0,
    nome: ""
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  createAtor(): void{
    alert("Ator ainda não pode ser criado! Ajustar backend!");
    // this.productService.create(this.product).subscribe(() =>{
    //   this.productService.showMsg('Produto criado com sucesso!');
    //   this.router.navigate(['/ator']);
    // });

  }
  cancel(): void{
    this.router.navigate(['/ator']);
  }
}
