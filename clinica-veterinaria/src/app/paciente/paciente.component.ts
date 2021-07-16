import { Component, OnInit } from '@angular/core';
import { Paciente } from '../models/paciente.model';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  pacientes: Paciente[] = [
    {
      id: 1,
      nome: "Tato Geléia",
      especie: "cao",
      clienteResponsavelId: 1
    },
    {
      id: 2,
      nome: "Ansedes",
      especie: "gato",
      clienteResponsavelId: 2
    }
  ]
  constructor() { }

  ngOnInit(): void {

  }

}
