import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import {ActivatedRoute} from "@angular/router";
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ListService]
})

export class ListComponent implements OnInit {

  constructor(private http: Http, private route: ActivatedRoute, private service: ListService) { }
  headers: Header[] = [];
  rows: string[][] = [];
  
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if(params["id"] === undefined)
        this.getAll(params["clase"]);
      else
        this.getOne(params["clase"], params["id"]);
    });
  }

  private getAll(clase: string): void{
    let sub = this.service.getAll(clase).subscribe(resp =>{
      this.headers = [];
      this.rows = [];
      for (var key in resp[0]) {
        if(key !== "Habilitado" && key !== "id"){
          let header = new Header();
          header.value = key;
          switch(key){
            case "Precio": header.type = "currency"; break;
            case "Restricciones":
            case "Secciones":
            case "Artículos": header.type = "list"; break;
            default: header.type = "text"; break;
          }
          this.headers.push(header);
        }
      }
      for(var i = 0; i <= resp.length - 1; i++){
        let row: string[] = [];
        for (var key in resp[i]) {
          if(key !== "Habilitado" && key !== "id"){
            resp[i][key] === "" ? row.push("-") : row.push(resp[i][key]);
          }
        }
        this.rows.push(row);
      }
      sub.unsubscribe();
    });
  }

  private getOne(clase: string, id: number): void{
    let sub = this.service.getOne(clase, id).subscribe(resp =>{
      this.headers = [];
      this.rows = [];
      for (var key in resp) {
        if(key !== "Habilitado" && key !== "id"){
          let header = new Header();
          header.value = key;
          switch(key){
            case "Precio": header.type = "currency"; break;
            case "Restricciones":
            case "Secciones":
            case "Artículos": header.type = "list"; break;
            default: header.type = "text"; break;
          }
          this.headers.push(header);
        }
      }
      let row: string[] = [];
      for (var key in resp) {
        if(key !== "Habilitado" && key !== "id"){
          resp[key] === "" ? row.push("-") : row.push(resp[key]);
        }
      }
      this.rows.push(row);
      sub.unsubscribe();
    });
  }

}

class Header{
  value: string;
  type: string;
}