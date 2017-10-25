import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private http: Http) { }

  private entidad = [];
  private inputs: Input[] = [];
  private data = false;

  ngOnInit() {
    var url: string[] = document.location.href.split("/");
    let clase: string = url[url.length - 2];
    var accion: string = url[url.length - 1];
    let id: number = 0;
    if(accion !== "crear"){
      id = Number.parseInt(accion);
      accion = clase;
      clase = url[url.length - 3];
    }
    this.http.get("/JSON/" + clase + ".json").subscribe(resp =>{
      this.entidad = this.getOne(resp.json(), id);
      
      if(this.entidad === null){
        alert("La entidad indicada no existe");
      }
      else{
        for (var key in this.entidad) {
          if(key !== "id"){
            let input = new Input();
            input.label = key + ":";
            input.value = this.entidad[key];
            switch(key){
              case "Nombre":
              case "Descripción":
              case "Apellido":
              case "Puesto":
              case "Usuario":
              case "Contraseña": input.type = "text"; break;
              case "Precio":
              case "Calorías":
              case "Tiempo Preparación":
              case "DNI":
              case "Código de Seguridad": input.type = "number"; break;
              case "Email": input.type = "email"; break;
              case "Restricciones": input.type = "list"; break;
              case "Entrada":
              case "Salida": input.type = "datetime"; break;
              case "Hora Inicio":
              case "Hora Fin": input.type = "time"; break;
              case "Fecha Baja": input.type = "date"; break;
              case "Puesto":
              case "Rol": input.type = "enum"; break;
              default: input.type = "text";
            }
            this.inputs.push(input);
          }
        }
      }
      if(accion === "eliminar")
        (<HTMLInputElement> document.getElementById("fieldset")).disabled = true;
    });
  }

  getOne(jsonArray, id: number): any{
    if(id === 0)
      return jsonArray[0];
    else{
      let row = null;
      jsonArray.forEach(element => {
        if(Number.parseInt(element.id) === id){
          row = element;
        }
      });
      return row;
    }
  }

}

class Input{
  label: string;
  value: string;
  type: string;
}

enum Puestos{
  Mozo,
  Encargado,
  Cocinero
}

enum Roles{
  Admin,
  Cliente,
  Empleado
}
