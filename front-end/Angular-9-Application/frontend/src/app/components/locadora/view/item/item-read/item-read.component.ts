import { ItemService } from './../../../service/item.service';
import { Item } from './../../../model/item/item.model';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-item-read',
  templateUrl: './item-read.component.html',
  styleUrls: ['./item-read.component.css']
})
export class ItemReadComponent implements OnInit {
  itens: Item[] = new Array();
  displayedColumns = ['id', 'numeroSerie','titulo', 'dataAquisicao', 'tipo', 'action'];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.read().subscribe(itens =>{
      this.itens = itens;
  });
  }

  delete(id: String): void{
    this.itemService.delete(id).pipe(
      catchError((err) => {
        console.log(err);
        this.itemService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })).subscribe(() =>{
        this.itemService.showMsg("Item deletado com sucesso!");
        window.location.reload();
    });
  }
}
