import { Locacao } from './../../../model/locacao/locacao.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locacao-read',
  templateUrl: './locacao-read.component.html',
  styleUrls: ['./locacao-read.component.css']
})
export class LocacaoReadComponent implements OnInit {
  locacoes: Locacao[] = new Array();
  displayedColumns = ['id', 'dataLocacao', 'dataDevolucaoPrevista', 'dataDevolucaoEfetiva', 'valorCobrado', 'multaCobrada', 'item', 'cliente', 'action'];
  constructor() { }

  ngOnInit(): void {

  }

  delete(id: String): void{
    // this.productService.delete(id);
    alert("Deletar locação " + id + " ainda não funcional! Ajustar Backend!");
  }
}
