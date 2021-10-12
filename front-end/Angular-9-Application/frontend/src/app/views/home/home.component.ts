import { TituloService } from './../../components/titulo/titulo.service';
import { ProductService } from './../../components/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Titulo } from 'src/app/components/titulo/titulo.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resultado: string ='';
  titulos: Titulo[] = new Array();
  constructor(private tituloService: TituloService, private router: Router) { }

  ngOnInit(): void {
  }
  teste(): void{
    this.tituloService.showMsg('teste feito!');
    this.tituloService.read().subscribe(titulos =>{
      this.titulos = titulos;
      console.log(titulos);
  });
  }

}
