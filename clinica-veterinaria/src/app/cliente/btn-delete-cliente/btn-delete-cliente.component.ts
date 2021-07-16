import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-btn-delete-cliente',
  templateUrl: './btn-delete-cliente.component.html',
  styleUrls: ['./btn-delete-cliente.component.css']
})
export class BtnDeleteClienteComponent implements OnInit {

  @Input() cliente!: Cliente;

  clienteForm!: FormGroup;
  clienteFormBsModalRef!: BsModalRef;

  constructor(
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.clienteForm = new FormGroup({
      titulo: new FormControl(),
      conteudo: new FormControl()
    });
  }

  openClienteFormModal(template: TemplateRef<any>) {
    this.clienteFormBsModalRef = this.bsModalService.show(template, {
      class: 'modal-xl modal-dialog-centered',
      ignoreBackdropClick: true
    })
  }

  closeModalClienteForm(): void {
    this.clienteFormBsModalRef.hide();
  }

  deleteCliente() {

  }

}
