import { ClasseService } from './../../../service/classe.service';
import { Classe } from './../../../model/classe/classe.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';
@Component({
  selector: 'app-classe-create',
  templateUrl: './classe-create.component.html',
  styleUrls: ['./classe-create.component.css']
})
export class ClasseCreateComponent implements OnInit {
  classe: Classe = {
    id_classe: undefined,
    nome:undefined,
    valor: undefined,
    prazo_devolucao: undefined
  }
  constructor(private router: Router, private classeService: ClasseService) { }

  ngOnInit(): void {
  }
  createClasse(): void{
    this.classeService.create(this.classe)
    .pipe(
      catchError((err) => {
        this.classeService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe(() =>{
      this.classeService.showMsg('Classe criada com sucesso!');
      this.router.navigate(['/classe']);
    });

  }
  cancel(): void{
    this.router.navigate(['/classe']);
  }
}
