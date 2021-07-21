import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

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
    private bsModalService: BsModalService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.clienteForm = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
      cpf: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('^[0-9]*$')])
    });
  }

  openClienteFormModal(template: TemplateRef<any>) {
    this.clienteFormBsModalRef = this.bsModalService.show(template, {
      class: 'modal-sl modal-dialog-centered',
      ignoreBackdropClick: true
    })
    this.clienteForm.reset();
  }

  closeModalClienteForm(): void {
    this.clienteFormBsModalRef.hide();
  }

  createCliente() {
    this.closeModalClienteForm();
    this.clientes.push(this.clienteForm.value);
    console.log(this.clienteForm.value);
    this.clienteCreated.emit(this.clienteForm.value);
    this.clienteService.postCliente(this.clienteForm.value).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error)
    });
  }

}
