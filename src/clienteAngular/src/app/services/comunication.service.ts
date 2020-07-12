import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  public mensaje= new Subject<string>();
  enviarMensajeObservable= this.mensaje.asObservable();
 info:string;


  constructor() { }

  enviarMensaje(id:string){
    this.info=id;
    this.mensaje.next(id);
  }
  obtenerMensaje(){
    return this.info;
    
  }




}


