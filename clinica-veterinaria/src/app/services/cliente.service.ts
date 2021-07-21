import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  postCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('https://letscode.loca.lt/clientes', cliente)
  }

  getCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('https://letscode.loca.lt/clientes')
  }

  editCliente(id: number, nome: string, cpf: string): Observable<Cliente> {
    const body = { nome: nome, cpf: cpf };
    return this.http.put<Cliente>(`https://letscode.loca.lt/clientes/${id}`, body)
  }

  deleteCliente(id: number) {
    return this.http.delete(`https://letscode.loca.lt/clientes/${id}`)
  }

}
