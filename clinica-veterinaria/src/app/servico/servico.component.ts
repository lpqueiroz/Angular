import { Component, OnInit } from '@angular/core';
import { Servico } from '../models/servico.model';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  servicos: Servico[] = [{
    id: 1,
    nome: "Banho e tosa",
    imgPath: "../../assets/imgs/banho-tosa.png"
  },
  {
    id: 2,
    nome: "Consulta",
    imgPath: "../../assets/imgs/consulta.png"
  },
  {
    id: 3,
    nome: "Exames",
    imgPath: "../../assets/imgs/exames.png"
  },
  {
    id: 4,
    nome: "Vacinação",
    imgPath: "../../assets/imgs/vacinacao.png"
  },
  {
    id: 5,
    nome: "Cirurgias",
    imgPath: "../../assets/imgs/cirurgias.png"
  },
  {
    id: 6,
    nome: "Hidroterapia",
    imgPath: "../../assets/imgs/hidroterapia.png"
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
