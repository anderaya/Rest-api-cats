import { Component, OnInit ,OnChanges } from '@angular/core';
import { GatosService} from '../../services/gatos.service';
import { Gatos } from '../../gatos';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.scss']
})
export class GatosComponent implements OnInit, OnChanges {
  gatos: Gatos[];
  gato: Gatos;
  constructor(private gatosService: GatosService, private router: Router) {
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

 ngOnChanges(){

 }

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
