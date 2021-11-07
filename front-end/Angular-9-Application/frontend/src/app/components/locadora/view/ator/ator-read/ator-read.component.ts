import { Router } from '@angular/router';
import { AtorService } from './../../../service/ator.service';
import { Ator } from './../../../model/ator/ator.model';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-ator-read',
  templateUrl: './ator-read.component.html',
  styleUrls: ['./ator-read.component.css']
})
export class AtorReadComponent implements OnInit {
  atores: Ator[] = new Array();
  displayedColumns = ['id', 'nome', 'action'];
  constructor(private atorService: AtorService, private router: Router) { }

  ngOnInit(): void {
    this.atorService.read().subscribe(atores =>{
        this.atores = atores;
    });
  }
  delete(id: String): void{
    this.atorService.delete(id).pipe(
      catchError((err) => {
        console.log(err);
        this.atorService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })).subscribe(() =>{
        this.atorService.showMsg("Classe deletada com sucesso!");
        window.location.reload();
    });
  }
}