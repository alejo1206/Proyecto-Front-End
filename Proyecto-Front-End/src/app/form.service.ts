import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormEntity } from './form/form-entity';

@Injectable()
export class FormService {

  constructor(private http: Http) { }

  getOne(clase: string, id: string): Observable<FormEntity>{
    if(id === "0"){
      id = "1";
    }
    return this.http.get("/JSON/" + clase + ".json").map(res => res.json()).map((data) => {
      return data.find(x => x.id === id);
    });
  }

  getUser(username: string, password: string): Observable<FormEntity>{
    return this.http.get("/JSON/usuarios.json").map(res => res.json()).map((data) => {
      return data.find(x => x.Usuario === username && x.Contraseña === password);
    });
  }

  getAll(clase: string): Observable<FormEntity[]>{
    return this.http.get("/JSON/" + clase + ".json").map(data => data.json());
  }

  add(entidad: FormEntity, clase: string):void {
    let labels = entidad.getLabels();
    let values = entidad.getValues();
    var obj = "{";
    for (var key in labels) {
      obj += "\"" + labels[key] + "\":\"" + values[key] + "\", ";
    }
    obj = obj.slice(0, -2);
    obj += "}";
    console.log(obj);
  }
}
