import { Item } from './../model/item/item.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = "http://localhost:8080/locadora/item";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  showMsg(msg: string): void{
    this.snackBar.open(msg, 'X',{
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(item: Item): Observable<Item>{
    return this.http.post<Item>(this.baseUrl, item);
  }
  read():Observable<Item[]>{
    return this.http.get<Item[]>(this.baseUrl);
  }

  readById(id: String): Observable<Item>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Item>(url);
  }

  update(item: Item): Observable<Item>
  {
    return this.http.put<Item>(this.baseUrl, item);
  }

  delete(id: String): Observable<Item>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Item>(url);
  }
}
