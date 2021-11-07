import { AtorService } from './../../../service/ator.service';
import { Ator } from './../../../model/ator/ator.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-ator-update',
  templateUrl: './ator-update.component.html',
  styleUrls: ['./ator-update.component.css']
})
export class AtorUpdateComponent implements OnInit {
  ator: Ator = {
    id_ator: undefined,
    nome: undefined
  }
  constructor(private router: Router, private route: ActivatedRoute, private atorService: AtorService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.atorService.readById(id)
    .pipe(
      catchError((err) => {
        this.atorService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe((ator) =>{
      this.ator = ator;
    })
  }

  updateAtor(): void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.atorService.update(this.ator)
    .pipe(
      catchError((err) => {
        this.atorService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe(() => 
    {
        this.atorService.showMsg("Ator alterado com sucesso!")
        this.router.navigate(['/ator'])
    });
  
  }
  cancel(): void {
    this.router.navigate(['/ator']);
  }
}
