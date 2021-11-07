import { DiretorService } from './../../../service/diretor.service';
import { Diretor } from './../../../model/diretor/diretor.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-diretor-update',
  templateUrl: './diretor-update.component.html',
  styleUrls: ['./diretor-update.component.css']
})
export class DiretorUpdateComponent implements OnInit {
  diretor: Diretor = {
    id_diretor: undefined,
    nome: undefined
  }
  constructor(private router: Router, private route: ActivatedRoute, private diretorService: DiretorService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.diretorService.readById(id)
    .pipe(
      catchError((err) => {
        this.diretorService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe((diretor) =>{
      this.diretor = diretor;
    })
  }
  updateDiretor(): void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.diretorService.update(this.diretor)
    .pipe(
      catchError((err) => {
        this.diretorService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe(() => 
    {
        this.diretorService.showMsg("Diretor alterado com sucesso!")
        this.router.navigate(['/diretor'])
    });
  }
  cancel(): void {
    this.router.navigate(['/diretor']);
  }
}
