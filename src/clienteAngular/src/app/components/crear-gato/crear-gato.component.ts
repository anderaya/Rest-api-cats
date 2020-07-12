import { Component, OnInit } from '@angular/core';
import {ImagenesService} from '../../services/imagenes.service';
import {GatosService } from '../../services/gatos.service';
import {ArrayImagen } from '../../arrayimagen';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Gatos} from '../../gatos';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-gato',
  templateUrl: './crear-gato.component.html',
  styleUrls: ['./crear-gato.component.scss']
})
export class CrearGatoComponent implements OnInit {


  constructor(private imagenesService:ImagenesService, private fb:FormBuilder, private gatosService:GatosService,
    private router: Router) { }
  imagenes: ArrayImagen[];
  
  myForm:FormGroup;

  ngOnInit(): void {
    this.getImagenes();
    this.myForm= this.fb.group({
      nombre: ['',Validators.required],
      edad: ['',Validators.required],
      raza: ['',Validators.required],
      foto: ['',Validators.required],
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
  this.myForm.controls.foto.setValue(foto);
    this.ander=true;
  }

 crearGato(){
   const gatos : Gatos ={
     edad:this.myForm.controls.edad.value,
     nombre:this.myForm.controls.nombre.value,
     foto:this.myForm.controls.foto.value,
     raza:this.myForm.controls.raza.value
   }

   if(this.ander=true){
    this.gatosService.addGato(gatos)
.subscribe(res=> console.log(res));

//ir a pagina gatos
  this.router.navigate(['/gatos']);
  }
  
 }

}

