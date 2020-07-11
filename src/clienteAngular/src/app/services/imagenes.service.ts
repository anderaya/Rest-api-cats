import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Imagenes} from '../imagenes';

import { ArrayImagen} from '../arrayimagen';

type NewType = string;

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  domain: NewType = 'http://localhost:3000';

constructor(private http: HttpClient) {
 }

  getImagenes() {
    return  this.http.get<Imagenes[]>(`${this.domain}/imagenes`)
    .pipe(map(res  => res));
  }

  // tslint:disable-next-line: typedef
  marcarImagen(id:String){
    return this.http.post<Imagenes>(`${this.domain}/imagenes/favoritos`, {'image_id':id,'sub_id':'f221c99b-304d-4404-b111-cbd3ddccf31a'})
    .pipe(map(res  => res));
  }
  // tslint:disable-next-line: typedef
  geFavoritos(){
    return this.http.get<ArrayImagen>(`${this.domain}/imagenes/favoritos`)
    .pipe(map(res  => res));
  }
}

