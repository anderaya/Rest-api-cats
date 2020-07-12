import { Component, OnInit ,OnChanges ,Output, EventEmitter} from '@angular/core';
import { GatosService} from '../../services/gatos.service';
import { Gatos } from '../../gatos';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';
import { ComunicationService } from '../../services/comunication.service'

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.scss']
})

export class GatosComponent implements OnInit {
  gatos: Gatos[];
  gato: Gatos;
  
  //exponer subject
  
  constructor(private gatosService: GatosService, private router: Router,
    private comunicationService:ComunicationService) {
    
   }

   
  ngOnInit(): void {
    this.gatosService.getGatos()
   .subscribe(res => {
       this.gatos =res['data'];
       console.log(this.gatos);
      },
      err => {
       console.log(err);
      }
     );
  }

 actualizar(id:string){
   
  this.comunicationService.enviarMensaje(id);
  this.router.navigate(['/actualizarGato']);
 }

  // tslint:disable-next-line: typedef
  fetchGatos () {
    this.gatosService.getGatos()
   .subscribe(res => {
       this.gatos =res['data'];
       console.log(this.gatos);
      },
      err => {
       console.log(err);
      }
     );
 }

 eliminarGato(id:String){
   this.gatosService.deleteGato(id)
   .subscribe(res => {
     this.gato=res["data"];
     console.log(this.gato);

     this.router.navigate(['/gatos']);
   })
 }
}
