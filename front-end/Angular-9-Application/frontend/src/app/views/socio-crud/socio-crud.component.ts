import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socio-crud',
  templateUrl: './socio-crud.component.html',
  styleUrls: ['./socio-crud.component.css']
})
export class SocioCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToSocioCreate(): void{
    this.router.navigate(['/socio/create']);
  }
}
