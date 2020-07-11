import { Component, OnInit } from '@angular/core';
import { GatosService} from '../../services/gatos.service';
import { Gatos } from '../../gatos';
@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.scss']
})
export class GatosComponent implements OnInit {
  gatos: Gatos[] = [];
  constructor(private gatosService: GatosService) {
    
   }

   
  ngOnInit(): void {
    this.fetchGatos();
  }
  

  fetchGatos(){
    this.gatosService.getGatos()
    .subscribe(gatos => this.gatos = gatos);
  }

}
