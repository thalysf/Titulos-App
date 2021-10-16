import { Ator } from './../../../model/ator/ator.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ator-read',
  templateUrl: './ator-read.component.html',
  styleUrls: ['./ator-read.component.css']
})
export class AtorReadComponent implements OnInit {
  atores: Ator[] = new Array();
  displayedColumns = ['id', 'nome', 'action'];
  constructor() { }

  ngOnInit(): void {
    this.atores = [
      { id: 1, nome: "Joao" },
      { id: 2, nome: "Carla" },
      { id: 3, nome: "Ana" },
      { id: 4, nome: "Andrea" },
      { id: 5, nome: "Maria" },
      { id: 6, nome: "Eduardo" }
      ];
  }
  delete(id: String): void{
    // this.productService.delete(id);
    alert("Deletar ator " + id + " ainda não funcional! Ajustar Backend!");
  }
}
