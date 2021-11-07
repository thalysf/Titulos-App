import { Ator } from './../model/ator/ator.model';
import { Titulo } from '../model/titulo/titulo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AtorService {

  baseUrl = "http://localhost:8080/locadora/ator";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  showMsg(msg: string): void{
    this.snackBar.open(msg, 'X',{
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(ator: Ator): Observable<Ator>{
    return this.http.post<Ator>(this.baseUrl, ator);
  }
  read():Observable<Ator[]>{
    return this.http.get<Ator[]>(this.baseUrl);
  }

  readById(id: String): Observable<Ator>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Ator>(url);
  }

  update(ator: Ator): Observable<Ator>
  {
    return this.http.put<Ator>(this.baseUrl, ator);
  }

  delete(id: String): Observable<Ator>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Ator>(url);
  }
}
