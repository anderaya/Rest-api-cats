import { Component, OnInit, ɵExtraLocaleDataIndex } from '@angular/core';
import {ImagenesService} from '../../services/imagenes.service';
import { GatosService } from '../../services/gatos.service';
import { ArrayImagen } from '../../arrayimagen';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Gatos} from '../../gatos';
@Component({
  selector: 'app-crear-gato',
  templateUrl: './crear-gato.component.html',
  styleUrls: ['./crear-gato.component.scss']
})
export class CrearGatoComponent implements OnInit {


  constructor(private imagenesService:ImagenesService, private fb:FormBuilder, private gatosService:GatosService) { }
  imagenes: ArrayImagen[];
  
  form:FormGroup;

  ngOnInit(): void {
    this.getImagenes();
    this.form= this.fb.group({
      nombre: '',
      edad: '',
      raza: '',
      foto: ''
    });
  }

  ander=false;
  gato:Gatos;

  getImagenes () {
    this.imagenesService.geFavoritos()
   .subscribe(res => {
       this.imagenes =res['data'];
       console.log(this.imagenes);
      },
      err => {
       console.log(err);
      }
     );
 }
 
  getFoto(foto:String){
  this.form.controls.foto.setValue(foto);
    this.ander=true;
  }

 crearGato(){
   const gatos : Gatos ={
     edad:this.form.controls.edad.value,
     nombre:this.form.controls.nombre.value,
     foto:this.form.controls.foto.value,
     raza:this.form.controls.raza.value
   }

   if(this.ander=true){
    this.gatosService.addGato(gatos)
.subscribe(res=> console.log(res));

  }
  
 }

}

