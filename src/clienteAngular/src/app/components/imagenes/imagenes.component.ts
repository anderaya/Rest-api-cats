import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { ImagenesService} from '../../services/imagenes.service';
import {Imagenes } from '../../imagenes';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent implements OnInit {
  imagenes:Imagenes[];
  constructor(private imagenesService:ImagenesService) { 
    
  }
  ngOnInit(): void {
    this.getImagenes();
  }
  getImagenes () {
     this.imagenesService.getImagenes()
    .subscribe(res => {
        this.imagenes =res['data'];
        console.log(this.imagenes);
       },
       err => {
        console.log(err);
       }
      );
  }

  anadirFavorito(id:string){
    this.imagenesService.marcarImagen(id)
    .subscribe(res=> console.log(res));
  }

}
