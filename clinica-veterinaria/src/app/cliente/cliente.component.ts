import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { LoggingServiceService } from '../services/logging-service.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  // clientes: Cliente[] = [
  //   {
  //     id: 1,
  //     nome: "Larissa Queiroz",
  //     cpf: "10016705408"
  //   },
  //   {
  //     id: 2,
  //     nome: "Tato",
  //     cpf: "2321414343"
  //   }
  // ]

  clientes: Cliente[] = [];
  clienteService = new LoggingServiceService // NÃO USA ASSIM!!!! NÃO INSTANCIA NA MÃO!

  constructor(
    private loggingService: LoggingServiceService // USA INJEÇÃO DE DEPENDÊNCIA!!
  ) { }

  ngOnInit(): void {
  }

  onClienteCreated(event: any) {
    console.log(event);
    this.clientes.push(event);
    this.clientes.forEach((cliente, i) => {
      console.log(cliente);
      cliente.id = i + 1;
    })
    console.log(this.clientes);
    this.loggingService.clienteCadastradoLog(event.nome);
  }
}
