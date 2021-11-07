import { ClasseService } from './../../../service/classe.service';
import { Classe } from './../../../model/classe/classe.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-classe-update',
  templateUrl: './classe-update.component.html',
  styleUrls: ['./classe-update.component.css']
})
export class ClasseUpdateComponent implements OnInit {
  classe: Classe = {
    id_classe: undefined,
    nome:undefined,
    valor: undefined,
    prazo_devolucao: undefined
  }
  constructor(private router: Router, private route: ActivatedRoute, private classeService: ClasseService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.classeService.readById(id)
    .pipe(
      catchError((err) => {
        this.classeService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe((classe) =>{
      this.classe = classe;
    });
  }
  updateClasse(): void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.classeService.update(this.classe)
    .pipe(
      catchError((err) => {
        this.classeService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe(() => 
    {
        this.classeService.showMsg("classe alterada com sucesso!")
        this.router.navigate(['/classe'])
    });
  }
  cancel(): void {
    this.router.navigate(['/classe']);
  }
}
