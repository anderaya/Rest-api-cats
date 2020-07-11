import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Gatos} from '../gatos';
import { map } from 'rxjs/operators';

//crear metodos que pidan datos al back end
@Injectable({
  providedIn: 'root'
})
export class GatosService {
  domain: string= "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getGatos(){
    
    return this.http.get<Gatos[]>(`${this.domain}/gatos`)
    .pipe(map(res  => res));
    
  }
  getGato(id){
    this.http.get<Gatos>(`${this.domain}/gatos/${id}`)
    .pipe(map(res  => res));
  }
  addGato(newGato: Gatos){
    this.http.post(`${this.domain}/gatos`,newGato)
    .pipe(map(res  => res));
  }
  updateGato(gato){
    this.http.put(`${this.domain}/gatos/${gato.id}`,gato)
    .pipe(map(res  => res));
  }
  deleteGato(id){
    this.http.delete(`${this.domain}/gatos/${id}`)
    .pipe(map(res  => res));
  }

  
}
