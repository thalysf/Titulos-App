import { Titulo } from 'src/app/components/locadora/model/titulo/titulo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TituloService {

  baseUrl = "http://localhost:8080/locadora/titulo";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  showMsg(msg: string): void{
    this.snackBar.open(msg, 'X',{
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(titulo: Titulo): Observable<Titulo>{
    return this.http.post<Titulo>(this.baseUrl, titulo);
  }
  read():Observable<Titulo[]>{
    return this.http.get<Titulo[]>(this.baseUrl);
  }

  readById(id: String): Observable<Titulo>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Titulo>(url);
  }

  update(titulo: Titulo): Observable<Titulo>
  {
    return this.http.put<Titulo>(this.baseUrl, titulo);
  }

  delete(id: String): Observable<Titulo>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Titulo>(url);
  }
}
