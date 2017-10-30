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
    if(this.route.params["clase"] !== "articulos" && this.route.params["clase"] !== "jornadas" && this.route.params["clase"] !== "menus" && this.route.params["clase"] !== "repartidores" && this.route.params["clase"] !== "restricciones" && this.route.params["clase"] !== "secciones" && this.route.params["clase"] !== "turnos" && this.route.params["clase"] !== "usuarios"){
        this.router.navigate(["error"]);
    }
    else{
    this.route.params.subscribe((params) => {
      this.clase = params["clase"];
      this.getAll(this.clase);
    })
  };
  }

  private getAll(clase: string): void{
    let sub = this.service.getAll(clase).subscribe(resp => {
      let entidad = new ListEntity(resp);
      this.entity = entidad;
      sub.unsubscribe();
    });
  }

}