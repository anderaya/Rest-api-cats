import { Component, Input, OnInit,AfterViewInit} from '@angular/core';
import {ImagenesService} from '../../services/imagenes.service';
import {GatosService } from '../../services/gatos.service';
import {ArrayImagen } from '../../arrayimagen';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Gatos} from '../../gatos';
import { Router } from '@angular/router';
import {ComunicationService} from '../../services/comunication.service';


@Component({
  selector: 'app-actualizar-gato',
  templateUrl: './actualizar-gato.component.html',
  styleUrls: ['./actualizar-gato.component.scss']
})
export class ActualizarGatoComponent implements OnInit,AfterViewInit {
  imagenes: ArrayImagen[];
  myForm: FormGroup;
  gatoo: Gatos;
  prueba: string;

  constructor(private imagenesService:ImagenesService, private fb:FormBuilder, private gatosService:GatosService,
              private router: Router, private comunicationService:ComunicationService) {
      this.prueba = this.comunicationService.obtenerMensaje();
     }

   ngOnInit(): void {
    this.getImagenes();
    console.log(this.prueba);
    this.obtenerGato(this.prueba);
    this.iniciarlizarForm();
  }

  ngAfterViewInit(){
    setTimeout(() => {
    this.myForm = this.fb.group({
     nombre: [this.gatoo?.nombre, Validators.required],
     edad: [this.gatoo?.edad, Validators.required],
     raza: [this.gatoo?.raza, Validators.required],
     foto: [this.gatoo?.foto, Validators.required],
   });
    }, 1000);
  }

  iniciarlizarForm(){
    this.myForm= this.fb.group({
      nombre: ['',Validators.required],
      edad: ['',Validators.required],
      raza: ['',Validators.required],
      foto: ['',Validators.required],
    });
  }

  obtenerGato (prueba:string){
   this.gatosService.getGato(prueba).subscribe(res => {
    this.gatoo = res['data'];
    });
  }

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
  }

 actualizarGato(){
   const gatos : Gatos ={
     _id:this.gatoo._id,
     edad:this.myForm.controls.edad.value,
     nombre:this.myForm.controls.nombre.value,
     foto:this.myForm.controls.foto.value,
     raza:this.myForm.controls.raza.value
   };
    this.gatosService.updateGato(gatos).subscribe(res=> console.log(res));
   console.log(this.myForm.controls.edad.value);
//ir a pagina gatos
    this.router.navigate(['/gatos']);
  }

}
