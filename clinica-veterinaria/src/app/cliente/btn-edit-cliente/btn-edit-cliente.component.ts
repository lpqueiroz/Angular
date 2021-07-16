import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-btn-edit-cliente',
  templateUrl: './btn-edit-cliente.component.html',
  styleUrls: ['./btn-edit-cliente.component.css']
})
export class BtnEditClienteComponent implements OnInit {

  @Input() cliente!: Cliente;

  clienteForm!: FormGroup;
  clienteFormBsModalRef!: BsModalRef;
  clientes: Cliente[] = [];
  nome!: string;
  cpf!: string;

  constructor(
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.clienteForm = new FormGroup({
      nome: new FormControl(),
      cpf: new FormControl()
    })
  }

  openClienteFormModal(template: TemplateRef<any>) {
    this.clienteFormBsModalRef = this.bsModalService.show(template, {
      class: 'modal-sl modal-dialog-centered',
      ignoreBackdropClick: true
    })
    this.nome = this.cliente.nome;
    this.cpf = this.cliente.cpf;
  }

  closeModalClienteForm(): void {
    this.clienteFormBsModalRef.hide();
  }

  editCliente() {
    this.closeModalClienteForm();
    console.log(this.clienteForm);
  }

}
