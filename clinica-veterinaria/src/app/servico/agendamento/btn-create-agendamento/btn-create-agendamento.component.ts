import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-btn-create-agendamento',
  templateUrl: './btn-create-agendamento.component.html',
  styleUrls: ['./btn-create-agendamento.component.css']
})
export class BtnCreateAgendamentoComponent implements OnInit {

  @Input() nomeServico: string = '';
  agendamentoFormBsModalRef!: BsModalRef;
  agendamentoForm!: FormGroup;

  dateConfig: BsDatepickerConfig = new BsDatepickerConfig();

  constructor(
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.agendamentoForm = new FormGroup({
      nomeServico: new FormControl(),
      data: new FormControl(),
      nomePaciente: new FormControl(),
      nomeResponsavel: new FormControl(),
      especie: new FormControl()
    });
    this.dateConfig.containerClass = 'theme-dark-blue';
  }

  openModalAgendamentoForm(template: TemplateRef<any>) {
    this.agendamentoFormBsModalRef = this.bsModalService.show(template, {
      class: 'modal-sl modal-dialog-centered',
      ignoreBackdropClick: true
    })
  }

  closeModalAgendamentoForm(): void {
    this.agendamentoFormBsModalRef.hide();
  }

  createAgendamento() {
    this.closeModalAgendamentoForm();
    console.log(this.agendamentoForm.value);
  }


}
