import { Titulo } from '../model/titulo/titulo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TituloService {

  baseUrl = "http://localhost:8080/titulos";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  showMsg(msg: string): void{
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  // CRUD
  // create(product: Product): Observable<Product>{
  //   return this.http.post<Product>(this.baseUrl, product);
  // }
  read():Observable<Titulo[]>{
    return this.http.get<Titulo[]>(this.baseUrl);
  }

  readById(id: String): Observable<Titulo>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Titulo>(url);
  }

  // update(product: Product): Observable<Product>
  // {
  //   const url = `${this.baseUrl}/${product.id}`;
  //   return this.http.put<Product>(url, product);
  // }

  // delete(id: String): void
  // {
  //   const url = `${this.baseUrl}/${id}`;
  //   this.http.delete(url).subscribe(() => this.showMsg("Produto deletado com sucesso! Recarregue a página para atualizar!"));
  // }
  
  // // Validations
  // validateProductName(name: string): boolean{
  //   if(name.length === 0){
  //       return false;
  //   }
  //   return true;
  // }
  // validateProductPrice(price: number): boolean{
  //   if(price <= 0){
  //       return false;
  //   }
  //   return true;
  // }
}