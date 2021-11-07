import { AtorService } from './../../../service/ator.service';
import { ClasseService } from './../../../service/classe.service';
import { DiretorService } from './../../../service/diretor.service';
import { TituloService } from './../../../service/titulo.service';
import { Titulo } from 'src/app/components/locadora/model/titulo/titulo.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Ator } from './../../../model/ator/ator.model';
import { Classe } from './../../../model/classe/classe.model';
import { Diretor } from './../../../model/diretor/diretor.model';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-titulo-update',
  templateUrl: './titulo-update.component.html',
  styleUrls: ['./titulo-update.component.css']
})
export class TituloUpdateComponent implements OnInit {
  //titulo!: Titulo; -> usar esse após o backend estar implementado
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

  constructor(private router: Router, private route: ActivatedRoute, private tituloService: TituloService,
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

    const id = this.route.snapshot.paramMap.get('id') || "";
    this.tituloService.readById(id)
    .pipe(
      catchError((err) => {
        this.tituloService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe((titulo) =>{
      this.titulo = titulo;
    })
  }
  updateTitulo(): void{
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.tituloService.update(this.titulo)
    .pipe(
      catchError((err) => {
        this.tituloService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe(() => 
    {
        this.tituloService.showMsg("Título alterado com sucesso!")
        this.router.navigate(['/titulo'])
    });

  }
  cancel(): void{
    this.router.navigate(['/titulo']);
  }
}
