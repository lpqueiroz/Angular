import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicoComponent } from './servico/servico.component';
import { AgendamentoComponent } from './servico/agendamento/agendamento.component';
import { BtnCreateAgendamentoComponent } from './servico/agendamento/btn-create-agendamento/btn-create-agendamento.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteComponent } from './cliente/cliente.component';
import { BtnCreateClienteComponent } from './cliente/btn-create-cliente/btn-create-cliente.component';
import { BtnDeleteClienteComponent } from './cliente/btn-delete-cliente/btn-delete-cliente.component';
import { BtnEditClienteComponent } from './cliente/btn-edit-cliente/btn-edit-cliente.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ParentComponent } from './life-cycle-hooks/parent/parent.component';
import { ChildComponent } from './life-cycle-hooks/child/child.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoggingServiceService } from './services/logging-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ServicoComponent,
    AgendamentoComponent,
    BtnCreateAgendamentoComponent,
    ClienteComponent,
    BtnCreateClienteComponent,
    BtnDeleteClienteComponent,
    BtnEditClienteComponent,
    PacienteComponent,
    ParentComponent,
    ChildComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoggingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }



