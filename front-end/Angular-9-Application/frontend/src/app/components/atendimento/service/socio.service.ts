import { Socio } from './../model/cliente/socio.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SocioService {

  baseUrl = "http://localhost:8080/atendimento/socio";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  showMsg(msg: string): void{
    this.snackBar.open(msg, 'X',{
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(socio: Socio): Observable<Socio>{
    return this.http.post<Socio>(this.baseUrl, socio);
  }
  read():Observable<Socio[]>{
    return this.http.get<Socio[]>(this.baseUrl);
  }

  readById(id: String): Observable<Socio>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Socio>(url);
  }

  update(socio: Socio): Observable<Socio>
  {
    return this.http.put<Socio>(this.baseUrl, socio);
  }

  delete(id: String): Observable<Socio>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Socio>(url);
  }
}
