import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ListEntity } from './list/listEntity';

@Injectable()
export class ListService {

  constructor(private http: Http) { }

  getAll(clase: string): Observable<ListEntity[]>{
    return this.http.get("/JSON/" + clase + ".json").map(data => data.json());
  }
}
