import { AtorService } from './../../../service/ator.service';
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
  constructor(private atorService: AtorService) { }

  ngOnInit(): void {
    this.atorService.read().subscribe(atores =>{
        this.atores = atores;
    });
  }
  delete(id: String): void{
    // this.productService.delete(id);
    alert("Deletar ator " + id + " ainda não funcional! Ajustar Backend!");
  }
}