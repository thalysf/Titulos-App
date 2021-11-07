import { Classe } from './../../../model/classe/classe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classe-read',
  templateUrl: './classe-read.component.html',
  styleUrls: ['./classe-read.component.css']
})
export class ClasseReadComponent implements OnInit {
  classes: Classe[] = new Array();
  displayedColumns = ['id', 'nome', 'valor', 'prazoDevolucao', 'action'];
  constructor() { }

  ngOnInit(): void {
    this.classes = [
      { id_classe: 1, nome: "Bronze", valor: 1200, prazoDevolucao: 20},
      { id_classe: 2, nome: "Prata", valor: 3000, prazoDevolucao: 15},
      { id_classe: 3, nome: "Ouro", valor: 7000, prazoDevolucao: 10}
      ];
  }
  delete(id: String): void{
    // this.productService.delete(id);
    alert("Deletar classe " + id + " ainda não funcional! Ajustar Backend!");
  }
}
