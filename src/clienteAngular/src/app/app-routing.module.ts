import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './components/inicio/inicio.component';
import {GatosComponent} from './components/gatos/gatos.component';
import {ImagenesComponent} from './components/imagenes/imagenes.component';
import {CrearGatoComponent} from './components/crear-gato/crear-gato.component';
import {ActualizarGatoComponent} from './components/actualizar-gato/actualizar-gato.component';

const routes: Routes = [{
  path: 'inicio',
  component: InicioComponent
},{
  path: 'imagenes',
  component: ImagenesComponent,
},{
  path: 'gatos',
  component: GatosComponent
},{
  path: 'crearGato',
  component: CrearGatoComponent
},{
  path: 'actualizarGato',
  component: ActualizarGatoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
