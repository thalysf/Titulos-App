import { Diretor } from './../../../model/diretor/diretor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretor-read',
  templateUrl: './diretor-read.component.html',
  styleUrls: ['./diretor-read.component.css']
})
export class DiretorReadComponent implements OnInit {
  diretores: Diretor[] = new Array();
  displayedColumns = ['id', 'nome', 'action'];
  constructor() { }

  ngOnInit(): void {
    this.diretores = [
      { id_diretor: 1, nome: "Josué" },
      { id_diretor: 2, nome: "Emma Wattson" },
      { id_diretor: 3, nome: "Carlos Mioto" },
      { id_diretor: 4, nome: "Maria Clara" }
      ];
  }
  delete(id: String): void{
    // this.productService.delete(id);
    alert("Deletar diretor " + id + " ainda não funcional! Ajustar Backend!");
  }
}
