import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ListService {

  constructor(private http: Http) { }

  getAll(clase: string): Observable<any[]>{
    return this.http.get("/JSON/" + clase + ".json").map(data => data.json());
  }

  getOne(clase: string, id: number): Observable<any>{
    return this.http.get("/JSON/" + clase + ".json").map(res => res.json()).map((data) => {
      return data.find(x => x.id === id);
    });
  }
  
}
