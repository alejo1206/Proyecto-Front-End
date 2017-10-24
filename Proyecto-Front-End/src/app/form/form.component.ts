import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private http: Http) { }

  private entidad;
  private inputs: Input[] = [];

  ngOnInit() {
    let url: string[] = document.location.href.split("/");
    let clase: string = url[url.length - 2];
    var accion: string = url[url.length - 1];
    let id: number = 0;
    if(accion !== "crear"){
      id = Number.parseInt(accion);
      accion = clase;
      clase = url[url.length - 3];
    }
    this.http.get("/JSON" + clase + ".json").subscribe(resp =>{
      this.entidad = this.getOne(resp.json(), id);
      if(this.entidad === null){
        alert("La entidad indicada no existe");
      }
      else{
        for (var key in this.entidad) {
          let input = new Input();
          input.value = this.entidad[key];
          switch(key){
            case "Nombre":
            case "Descripción":
            case "Apellido":
            case "Puesto":
            case "Usuario":
            case "Contraseña": input.type = "text"; break;
            // TODO: completar tipos
          }
        }
      }
    });
  }

  getOne(jsonArray, id: number): any{
    if(id === 0)
      return jsonArray[0];
    else{
      let row = null;
      jsonArray.forEach(element => {
        if(element.id === id){
          row = element;
        }
      });
      return row;
    }
  }

}

class Input{
  value: string;
  type: string;
}
