import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

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

  constructor(
    private bsModalService: BsModalService,
    private clienteService: ClienteService
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
  }

  closeModalClienteForm(): void {
    this.clienteFormBsModalRef.hide();
  }

  editCliente() {
    this.closeModalClienteForm();
    console.log(this.clienteForm);
    this.clienteService.editCliente(this.cliente.id, this.clienteForm.value.nome, this.clienteForm.value.cpf).subscribe(cliente => {
      alert(`${this.clienteForm.value.nome} editado do com sucesso!`)
    }, error => {
      alert('Erro ao editar o cliente!');
    })
  }

}
