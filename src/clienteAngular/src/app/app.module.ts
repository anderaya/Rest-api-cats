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

@NgModule({
  declarations: [
    AppComponent,
    GatosComponent,
    InicioComponent,
    ImagenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [GatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
