import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locacao-crud',
  templateUrl: './locacao-crud.component.html',
  styleUrls: ['./locacao-crud.component.css']
})
export class LocacaoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToLocacaoCreate(): void{
    this.router.navigate(['/locacao/create']);
  }
}
