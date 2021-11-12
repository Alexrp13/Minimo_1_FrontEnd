import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';
import { EscogerEventoComponent} from './components/escoger-evento/escoger-evento.component';
import { ListarEventosComponent } from './components/listar-eventos/listar-eventos.component';

const routes: Routes = [
  { path: '', component: ListarEventosComponent },
  { path: 'crear-evento', component: CrearEventoComponent },
  { path: 'editar-evento/:id', component: CrearEventoComponent },
  { path: 'escoger-evento/:id', component: EscogerEventoComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
