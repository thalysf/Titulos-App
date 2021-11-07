import { Cliente } from './../model/cliente/cliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:8080/atendimento/cliente";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  showMsg(msg: string): void{
    this.snackBar.open(msg, 'X',{
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl, cliente);
  }
  read():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  readById(id: String): Observable<Cliente>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cliente>(url);
  }

  update(cliente: Cliente): Observable<Cliente>
  {
    return this.http.put<Cliente>(this.baseUrl, cliente);
  }

  delete(id: String): Observable<Cliente>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Cliente>(url);
  }
}
