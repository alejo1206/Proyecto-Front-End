import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import {ActivatedRoute, Router} from "@angular/router";
import { ListService } from '../list.service';
import { ListEntity } from './listEntity';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  constructor(private http: Http, private route: ActivatedRoute, private service: ListService, private router: Router) { }
  private entity: ListEntity;
  private clase;
  
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.clase = params["clase"];
      if(this.clase !== "articulos" && this.clase !== "jornadas" && this.clase !== "menus" && this.clase !== "repartidores" && this.clase !== "restricciones" && this.clase !== "secciones" && this.clase !== "turnos" && this.clase !== "usuarios"){
        this.router.navigate(["error"]);
      }
      else{
        this.getAll(this.clase);
      }})
  };

  private getAll(clase: string): void{
    let sub = this.service.getAll(clase).subscribe(resp => {
      let entidad = new ListEntity(resp);
      this.entity = entidad;
      sub.unsubscribe();
    });
  }

}