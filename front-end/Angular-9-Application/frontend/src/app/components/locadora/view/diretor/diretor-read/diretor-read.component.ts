import { DiretorService } from './../../../service/diretor.service';
import { Diretor } from './../../../model/diretor/diretor.model';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-diretor-read',
  templateUrl: './diretor-read.component.html',
  styleUrls: ['./diretor-read.component.css']
})
export class DiretorReadComponent implements OnInit {
  diretores: Diretor[] = new Array();
  displayedColumns = ['id', 'nome', 'action'];
  constructor(private diretorService: DiretorService) { }

  ngOnInit(): void {
    this.diretorService.read().subscribe(diretores =>{
      this.diretores = diretores;
  });
  }
  delete(id: String): void{
    this.diretorService.delete(id).pipe(
      catchError((err) => {
        console.log(err);
        this.diretorService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })).subscribe(() =>{
        this.diretorService.showMsg("Diretor deletado com sucesso!");
        window.location.reload();
    });
  }
}
