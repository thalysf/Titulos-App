import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classe-crud',
  templateUrl: './classe-crud.component.html',
  styleUrls: ['./classe-crud.component.css']
})
export class ClasseCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToClasseCreate(): void{
    this.router.navigate(['/classe/create']);
  }
}
