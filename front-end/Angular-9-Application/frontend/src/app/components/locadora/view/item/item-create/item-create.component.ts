import { TituloService } from './../../../service/titulo.service';
import { ItemService } from './../../../service/item.service';
import { Titulo } from 'src/app/components/locadora/model/titulo/titulo.model';
import { Item } from './../../../model/item/item.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  titulo!: Titulo;
  item: Item = {
    id_item: undefined,
    data_aquisicao: undefined,
    numero_serie: undefined,
    tipo: undefined,
    titulo: this.titulo
  };
  titulos: Titulo[] = new Array();
  constructor(private router: Router, private itemService: ItemService, private tituloService: TituloService) { }

  ngOnInit(): void {
    this.tituloService.read().subscribe(titulos =>{
      this.titulos = titulos;
  });
  }

  createItem(): void{
    console.log(this.item);
    this.itemService.create(this.item)
    .pipe(
      catchError((err) => {
        this.tituloService.showMsg(err.error.message);
        return throwError(err);    //Rethrow it back to component
      })
    )
    .subscribe(() =>{
      this.itemService.showMsg('Item criado com sucesso!');
      this.router.navigate(['/item']);
    });
  }

  cancel(): void{
    this.router.navigate(['/item']);
  }
}
