import { AtorService } from './../../../service/ator.service';
import { Ator } from './../../../model/ator/ator.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Component({
  selector: 'app-ator-create',
  templateUrl: './ator-create.component.html',
  styleUrls: ['./ator-create.component.css']
})
export class AtorCreateComponent implements OnInit {
  ator: Ator = {
    id_ator: undefined,
    nome: undefined
  } 
  constructor(private router: Router, private atorService: AtorService) { }

  ngOnInit(): void {
  }
  createAtor(): void{
    this.atorService.create(this.ator)
    .pipe(
      catchError((err) => {
        this.atorService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe(() =>{
      this.atorService.showMsg('Ator criado com sucesso!');
      this.router.navigate(['/ator']);
    });

  }
  cancel(): void{
    this.router.navigate(['/ator']);
  }
}
