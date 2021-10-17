import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ator-crud',
  templateUrl: './ator-crud.component.html',
  styleUrls: ['./ator-crud.component.css']
})
export class AtorCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToAtorCreate(): void{
    this.router.navigate(['/ator/create']);
  }
}
