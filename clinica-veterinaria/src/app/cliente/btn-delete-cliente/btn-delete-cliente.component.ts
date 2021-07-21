import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

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
    private bsModalService: BsModalService,
    private clienteService: ClienteService
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
    this.clienteService.deleteCliente(this.cliente.id).subscribe(cliente => {
      alert('Cliente deletado com sucesso!');
    }, error => {
      alert('Não foi possível deletar o cliente');
    })
  }

}
