import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-crud',
  templateUrl: './titulo-crud.component.html',
  styleUrls: ['./titulo-crud.component.css']
})
export class TituloCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToTituloCreate(): void{
    this.router.navigate(['/titulo/create']);
  }
}
