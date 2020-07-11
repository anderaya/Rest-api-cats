import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './components/inicio/inicio.component';
import {GatosComponent} from './components/gatos/gatos.component';
import {ImagenesComponent} from './components/imagenes/imagenes.component';

const routes: Routes = [{
  path: 'inicio',
  component: InicioComponent
},{
  path: 'imagenes',
  component: ImagenesComponent
},{
  path: 'gatos',
  component: GatosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
