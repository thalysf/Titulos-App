import { Locacao } from './../model/locacao/locacao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocacaoService {

  baseUrl = "http://localhost:8080/atendimento/locacao";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  showMsg(msg: string): void{
    this.snackBar.open(msg, 'X',{
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(locacao: Locacao): Observable<Locacao>{
    return this.http.post<Locacao>(this.baseUrl, locacao);
  }
  read():Observable<Locacao[]>{
    return this.http.get<Locacao[]>(this.baseUrl);
  }

  readById(id: String): Observable<Locacao>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Locacao>(url);
  }

  update(locacao: Locacao): Observable<Locacao>
  {
    return this.http.put<Locacao>(this.baseUrl, locacao);
  }

  delete(id: String): Observable<Locacao>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Locacao>(url);
  }
}
