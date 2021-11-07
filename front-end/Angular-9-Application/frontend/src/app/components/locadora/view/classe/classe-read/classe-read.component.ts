import { ClasseService } from './../../../service/classe.service';
import { Router } from '@angular/router';
import { Classe } from './../../../model/classe/classe.model';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-classe-read',
  templateUrl: './classe-read.component.html',
  styleUrls: ['./classe-read.component.css']
})
export class ClasseReadComponent implements OnInit {
  classes: Classe[] = new Array();
  displayedColumns = ['id', 'nome', 'valor', 'prazoDevolucao', 'action'];
  constructor(private router: Router, private classeService: ClasseService) { }

  ngOnInit(): void {
    this.classeService.read().subscribe(classes =>{
      this.classes = classes;
  });
  }
  delete(id: String): void{
    this.classeService.delete(id).pipe(
      catchError((err) => {
        console.log(err);
        this.classeService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })).subscribe(() =>{
        this.classeService.showMsg("Classe deletada com sucesso!");
        window.location.reload();
    });
  }
}
