import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormEntity } from './form/form-entity';

@Injectable()
export class FormService {

  constructor(private http: Http) { }

  getOne(clase: string, id: string): Observable<FormEntity[]>{
    if(id === "0"){
      id = "1";
    }
    return this.http.get("/JSON/" + clase + ".json").map(res => res.json()).map((data) => {
      return data.find(x => x.id === id);
    });
  }

}
