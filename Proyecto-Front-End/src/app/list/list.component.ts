import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import {ActivatedRoute} from "@angular/router";
import { ListService } from '../list.service';
import { Entity } from './entity';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  constructor(private http: Http, private route: ActivatedRoute, private service: ListService) { }
  private entity: Entity;
  private clase;
  
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.clase = params["clase"];
      this.getAll(this.clase);
    });
  }

  private getAll(clase: string): void{
    let sub = this.service.getAll(clase).subscribe(resp => {
      let entidad = new Entity(resp);
      this.entity = entidad;
      sub.unsubscribe();
    });
  }

}