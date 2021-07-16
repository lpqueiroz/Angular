import { Component, Input, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/models/agendamento.model';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  agendamentos: Agendamento[] = [
    {
      id: 1,
      nomeResponsavel: "Larissa Queiroz",
      nomePaciente: "Tato Geléia",
      especie: "cão",
      data: "10/10/2021",
      isCancelled: false
    },
    {
      id: 2,
      nomeResponsavel: "Pedro Paiva",
      nomePaciente: "Sansão",
      especie: "gato",
      data: "05/06/2021",
      isCancelled: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
