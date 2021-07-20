import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() { }

  clienteCadastradoLog(nomeCliente: string) {
    console.log(`O cliente ${nomeCliente} foi cadastrado com sucesso`);
  }
}
