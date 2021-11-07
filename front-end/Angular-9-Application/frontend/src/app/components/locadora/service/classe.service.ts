import { Classe } from './../model/classe/classe.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  baseUrl = "http://localhost:8080/locadora/classe";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  showMsg(msg: string): void{
    this.snackBar.open(msg, 'X',{
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(Classe: Classe): Observable<Classe>{
    return this.http.post<Classe>(this.baseUrl, Classe);
  }
  read():Observable<Classe[]>{
    return this.http.get<Classe[]>(this.baseUrl);
  }

  readById(id: String): Observable<Classe>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Classe>(url);
  }

  update(Classe: Classe): Observable<Classe>
  {
    return this.http.put<Classe>(this.baseUrl, Classe);
  }

  delete(id: String): Observable<Classe>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Classe>(url);
  }
}
