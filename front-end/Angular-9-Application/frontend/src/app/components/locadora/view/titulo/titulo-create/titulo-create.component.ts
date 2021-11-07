import { AtorService } from './../../../service/ator.service';
import { ClasseService } from './../../../service/classe.service';
import { DiretorService } from './../../../service/diretor.service';
import { TituloService } from './../../../service/titulo.service';
import { Titulo } from 'src/app/components/locadora/model/titulo/titulo.model';
import { Router } from '@angular/router';
import { Ator } from './../../../model/ator/ator.model';
import { Classe } from './../../../model/classe/classe.model';
import { Diretor } from './../../../model/diretor/diretor.model';
import { Component, OnInit } from '@angular/core';
import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Component({
  selector: 'app-titulo-create',
  templateUrl: './titulo-create.component.html',
  styleUrls: ['./titulo-create.component.css']
})
export class TituloCreateComponent implements OnInit {
  titulo: Titulo = {
    id_titulo: undefined,
    nome: undefined,
    ano: undefined,
    sinopse: undefined,
    categoria: undefined,
    diretor: undefined,
    classe: undefined,
    atores: []
  }
  diretores: Diretor[]  = new Array;
  classes: Classe[]  = new Array;
  atores: Ator[] = new Array();

  constructor(private router: Router, private tituloService: TituloService, 
    private diretorService: DiretorService, private classeService: ClasseService, private atorService: AtorService) { }

  ngOnInit(): void {
    this.diretorService.read().subscribe(diretores =>{
      this.diretores = diretores;
  });
  this.classeService.read().subscribe(classes =>{
    this.classes = classes;
  });
  this.atorService.read().subscribe(atores =>{
    this.atores = atores;
  });
  }
  createTitulo(): void{
    this.tituloService.create(this.titulo)
    .pipe(
      catchError((err) => {
        this.tituloService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe(() =>{
      this.tituloService.showMsg('Título criado com sucesso!');
      this.router.navigate(['/titulo']);
    });
  }

  cancel(): void{
    this.router.navigate(['/titulo']);
  }
}
