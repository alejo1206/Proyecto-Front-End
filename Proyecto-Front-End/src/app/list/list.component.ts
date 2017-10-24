import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  constructor(private http: Http) { }
  headers: Header[] = [];
  rows: string[][] = [];
  private data = [];
  
  ngOnInit() {
    let url = document.location.href.split("/");
    this.http.get("/JSON/" + url[url.length - 1] + ".json").subscribe(resp =>{
      this.data = resp.json();
      for (var key in this.data[0]) {
        if(key !== "Imagen" && key !== "Descripción Restricción" && key !== "Habilitado"){
          let header = new Header();
          header.value = key;
          switch(key){
            case "Precio": header.type = "currency"; break;
            case "Restricciones":
            case "Descripción Restricción": header.type = "list"; break;
            default: header.type = "text"; break;
          }
          this.headers.push(header);
        }
      }
      for(var i = 0; i <= this.data.length - 1; i++){
        let row: string[] = [];
        for (var key in this.data[i]) {
          if(key !== "Imagen" && key !== "Descripción Restricción" && key !== "Habilitado"){
            this.data[i][key] === "" ? row.push("-") : row.push(this.data[i][key]);
          }
        }
        this.rows.push(row);
      }
    });
  }
}

class Header{
  value: string;
  type: string
}