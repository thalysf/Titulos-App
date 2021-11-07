import { TituloService } from './../../../service/titulo.service';
import { ItemService } from './../../../service/item.service';
import { Item } from './../../../model/item/item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Titulo } from '../../../model/titulo/titulo.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {
  titulo!: Titulo;
  item: Item = {
    id_item: undefined,
    data_aquisicao: undefined,
    numero_serie: undefined,
    tipo: undefined,
    titulo: this.titulo
  };
  titulos: Titulo[] = new Array();
  constructor(private router: Router, private route: ActivatedRoute, private itemService: ItemService, private tituloService: TituloService) { }

  ngOnInit(): void {
    this.tituloService.read().subscribe(titulos =>{
      this.titulos = titulos;
  });
  const id = this.route.snapshot.paramMap.get('id') || "";
  this.itemService.readById(id)
  .pipe(
    catchError((err) => {
      this.itemService.showMsg(err.error.message);
      return throwError(err);    //Rethrow it back to component
    })
  )
  .subscribe((item) =>{
    this.item = item;
  })
  }

  updateItem(): void{
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.itemService.update(this.item)
    .pipe(
      catchError((err) => {
        this.itemService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe(() => 
    {
        this.itemService.showMsg("Item alterado com sucesso!")
        this.router.navigate(['/item'])
    });
  }

  cancel(): void{
    this.router.navigate(['/item']);
  }
}
