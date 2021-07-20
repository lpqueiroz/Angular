import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AgendamentoComponent } from './servico/agendamento/agendamento.component';
import { ServicoComponent } from './servico/servico.component';

const routes: Routes = [
  { path: '', component: ServicoComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'pacientes', component: PacienteComponent },
  { path: 'agendamentos', component: AgendamentoComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
