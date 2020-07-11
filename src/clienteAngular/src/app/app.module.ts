import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GatosComponent } from './components/gatos/gatos.component';

//importar servicio
import {GatosService} from './services/gatos.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './components/inicio/inicio.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';

//material
import {MatButtonModule} from '@angular/material/button';
import {MaterialModule} from './material/material.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { CrearGatoComponent } from './components/crear-gato/crear-gato.component';
import { ActualizarGatoComponent } from './components/actualizar-gato/actualizar-gato.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GatosComponent,
    InicioComponent,
    ImagenesComponent,
    CrearGatoComponent,
    ActualizarGatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule
  ],
  providers: [GatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
