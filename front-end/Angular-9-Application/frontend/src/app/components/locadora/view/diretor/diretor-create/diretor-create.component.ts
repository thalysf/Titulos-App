import { Diretor } from './../../../model/diretor/diretor.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretor-create',
  templateUrl: './diretor-create.component.html',
  styleUrls: ['./diretor-create.component.css']
})
export class DiretorCreateComponent implements OnInit {
  diretor: Diretor = {
    id: 0,
    nome: ""
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  createDiretor(): void{
    alert("Diretor ainda não pode ser criado! Ajustar backend!");
    // this.productService.create(this.product).subscribe(() =>{
    //   this.productService.showMsg('Produto criado com sucesso!');
    //   this.router.navigate(['/ator']);
    // });

  }
  cancel(): void{
    this.router.navigate(['/diretor']);
  }
}
