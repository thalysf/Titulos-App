import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-crud',
  templateUrl: './item-crud.component.html',
  styleUrls: ['./item-crud.component.css']
})
export class ItemCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToItemCreate(): void{
    this.router.navigate(['/item/create']);
  }
}
