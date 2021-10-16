import { Classe } from './../../../model/classe/classe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classe-read',
  templateUrl: './classe-read.component.html',
  styleUrls: ['./classe-read.component.css']
})
export class ClasseReadComponent implements OnInit {
  classes: Classe[] = new Array();
  displayedColumns = ['id', 'nome', 'valor', 'dataDevolucao', 'action'];
  constructor() { }

  ngOnInit(): void {
    this.classes = [
      { id: 1, nome: "Bronze", valor: 1200, dataDevolucao: "20/12/2021"},
      { id: 2, nome: "Prata", valor: 3000, dataDevolucao: "20/11/2021"},
      { id: 3, nome: "Ouro", valor: 7000, dataDevolucao: "20/10/2021"}
      ];
  }
  delete(id: String): void{
    // this.productService.delete(id);
    alert("Deletar classe " + id + " ainda não funcional! Ajustar Backend!");
  }
}
