import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretor-crud',
  templateUrl: './diretor-crud.component.html',
  styleUrls: ['./diretor-crud.component.css']
})
export class DiretorCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToDiretorCreate(): void{
    this.router.navigate(['/diretor/create']);
  }
}
