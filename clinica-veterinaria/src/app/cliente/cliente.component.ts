import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';

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

  constructor() { }

  ngOnInit(): void {
  }

  onClienteCreated(event: any) {
    this.clientes.push(event);
    this.clientes.forEach((cliente, i) => {
      cliente.id = i + 1;
    })
    console.log(this.clientes);
  }

}
