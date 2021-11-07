import { SocioService } from './../../../service/socio.service';
import { Socio } from './../../../model/cliente/socio.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Component({
  selector: 'app-socio-read',
  templateUrl: './socio-read.component.html',
  styleUrls: ['./socio-read.component.css']
})
export class SocioReadComponent implements OnInit {
  socios: Socio[] = new Array();


  displayedColumns = ['id', 'nome', 'numInscricao', 'dataNascimento', 'sexo', 'ativo', 'cpf', 'endereco', 'tel', 'dependentes', 'action'];
  constructor(private router: Router, private socioService: SocioService) { }

  ngOnInit(): void {
    this.socioService.read().subscribe(socios =>{
      this.socios = socios;
  });
  }
  delete(id: String): void{
    this.socioService.delete(id).pipe(
      catchError((err) => {
        console.log(err);
        this.socioService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })).subscribe(() =>{
        this.socioService.showMsg("Sócio deletado com sucesso!");
        window.location.reload();
    });
  }
}
