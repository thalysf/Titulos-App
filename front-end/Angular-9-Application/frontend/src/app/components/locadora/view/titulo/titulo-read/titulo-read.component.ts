import { TituloService } from './../../../service/titulo.service';
import { Ator } from './../../../model/ator/ator.model';
import { Router } from '@angular/router';
import { Titulo } from 'src/app/components/locadora/model/titulo/titulo.model';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-titulo-read',
  templateUrl: './titulo-read.component.html',
  styleUrls: ['./titulo-read.component.css']
})
export class TituloReadComponent implements OnInit {
  titulos: Titulo[] = new Array();
  atores: Ator[] = new Array();
  displayedColumns = ['id', 'nome', 'ano', 'sinopse', 'categoria', 'diretor', 'classe', 'atores', 'action'];
  constructor(private router: Router, private tituloService: TituloService) {   }

  ngOnInit(): void {
    this.tituloService.read().subscribe(titulos =>{
      this.titulos = titulos;
  });

  }
  delete(id: String): void{
    this.tituloService.delete(id).pipe(
      catchError((err) => {
        console.log(err);
        this.tituloService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })).subscribe(() =>{
        this.tituloService.showMsg("Título deletado com sucesso!");
        window.location.reload();
    });
  }
}
