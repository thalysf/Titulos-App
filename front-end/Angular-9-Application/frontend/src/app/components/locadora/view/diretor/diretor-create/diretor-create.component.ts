import { DiretorService } from './../../../service/diretor.service';
import { Diretor } from './../../../model/diretor/diretor.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Component({
  selector: 'app-diretor-create',
  templateUrl: './diretor-create.component.html',
  styleUrls: ['./diretor-create.component.css']
})
export class DiretorCreateComponent implements OnInit {
  diretor: Diretor = {
    id_diretor: undefined,
    nome: undefined
  }
  constructor(private router: Router, private diretorService: DiretorService) { }

  ngOnInit(): void {
  }
  createDiretor(): void{
    this.diretorService.create(this.diretor)
    .pipe(
      catchError((err) => {
        this.diretorService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe(() =>{
      this.diretorService.showMsg('Diretor criado com sucesso!');
      this.router.navigate(['/diretor']);
    });

  }
  cancel(): void{
    this.router.navigate(['/diretor']);
  }
}
