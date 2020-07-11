import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Imagenes} from '../imagenes';


@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  domain: string= "http://localhost:3000";

constructor(private http: HttpClient) {
  
 }
  getImagenes() {
    
    return  this.http.get<Imagenes[]>(`${this.domain}/imagenes`)
    .pipe(map(res  => res));
    
  }
  marcarImagen(id){
    this.http.post(`${this.domain}/imagenes/favoritos`,id)
    .pipe(map(res  => res));
  }
  geFavoritos(){
    return this.http.get<Imagenes>(`${this.domain}/imagenes/favoritos`)
    .pipe(map(res  => res));
  }
}

