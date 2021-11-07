import { Diretor } from './../model/diretor/diretor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DiretorService {

  baseUrl = "http://localhost:8080/locadora/diretor";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  showMsg(msg: string): void{
    this.snackBar.open(msg, 'X',{
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(diretor: Diretor): Observable<Diretor>{
    return this.http.post<Diretor>(this.baseUrl, diretor);
  }
  read():Observable<Diretor[]>{
    return this.http.get<Diretor[]>(this.baseUrl);
  }

  readById(id: String): Observable<Diretor>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Diretor>(url);
  }

  update(diretor: Diretor): Observable<Diretor>
  {
    return this.http.put<Diretor>(this.baseUrl, diretor);
  }

  delete(id: String): Observable<Diretor>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Diretor>(url);
  }
}
