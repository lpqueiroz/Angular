import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-btn-create-cliente',
  templateUrl: './btn-create-cliente.component.html',
  styleUrls: ['./btn-create-cliente.component.css']
})
export class BtnCreateClienteComponent implements OnInit {

  clienteForm!: FormGroup;
  clienteFormBsModalRef!: BsModalRef;
  clientes: Cliente[] = [];

  @Output() clienteCreated = new EventEmitter<any>();

  constructor(
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.clienteForm = new FormGroup({
      nome: new FormControl(),
      cpf: new FormControl()
    });
  }

  openClienteFormModal(template: TemplateRef<any>) {
    this.clienteFormBsModalRef = this.bsModalService.show(template, {
      class: 'modal-sl modal-dialog-centered',
      ignoreBackdropClick: true
    })
  }

  closeModalClienteForm(): void {
    this.clienteFormBsModalRef.hide();
  }

  createCliente() {
    this.closeModalClienteForm();
    console.log(this.clienteForm);
    this.clientes.push(this.clienteForm.value);
    this.clienteCreated.emit(this.clienteForm.value);
  }

}
