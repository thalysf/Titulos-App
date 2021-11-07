import { LocacaoService } from './../../../service/locacao.service';
import { Locacao } from './../../../model/locacao/locacao.model';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-locacao-read',
  templateUrl: './locacao-read.component.html',
  styleUrls: ['./locacao-read.component.css']
})
export class LocacaoReadComponent implements OnInit {
  locacoes: Locacao[] = new Array();
  displayedColumns = ['id', 'dataLocacao', 'dataDevolucaoPrevista', 'dataDevolucaoEfetiva', 'valorCobrado', 'multaCobrada', 'item', 'cliente', "socio", 'action'];
  constructor(private locacaoService: LocacaoService) { }

  ngOnInit(): void {
    this.locacaoService.read().subscribe(locacoes =>{
      this.locacoes = locacoes;
  });
  }

  delete(id: String): void{
    this.locacaoService.delete(id).pipe(
      catchError((err) => {
        console.log(err);
        this.locacaoService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })).subscribe(() =>{
        this.locacaoService.showMsg("Locação deletada com sucesso!");
        window.location.reload();
    });
  }
}
