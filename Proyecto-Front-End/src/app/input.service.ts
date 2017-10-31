import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { InputBase } from './input-base';
import { DropdownInput } from './input-dropdown';
import { TextboxInput } from './input-textbox';
import { CheckboxInput } from './input-checkbox';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NumberInput } from './input-number';
import { DateInput } from './input-date';
import { TimeInput } from './input-time';
import { InputValidator } from './input-validator';


@Injectable()
export class InputService {

  constructor(private http: Http) { }

  toFormGroup(inputs: InputBase<any>[] ) {
    let group: any = {};
    inputs.forEach(input => {
      switch(input.key){
        case "Nombre":
        case "Apellido":{
          group[input.key] = new FormControl(input.value === "" ? null : input.value, [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern("[a-zA-Z][a-zA-Z ]+")
          ]);
          break;
        }
        case "Descripción":
        case "Usuario":{
          group[input.key] = new FormControl(input.value === "" ? null : input.value, [
            Validators.required,
            Validators.minLength(3)
          ]);
          break;
        }
        case "Teléfono":{
          group[input.key] = new FormControl(input.value === "" ? null : input.value, [
            Validators.required,
            Validators.pattern("[0-9]{7,13}") 
          ]);
          break;
        }
        case "DNI":{
          group[input.key] = new FormControl(input.value === "" ? null : input.value, [
            Validators.required,
            Validators.pattern("[0-9]{8}") 
          ]);
          break;
        }
        case "Email":{
          group[input.key] = new FormControl(input.value === "" ? null : input.value, [
            Validators.required,
            Validators.email
          ]);
          break;
        }
        case "Precio":
        case "Calorías":
        case "Tiempo de Preparación":
        case "Rol":
        case "Fecha Entrada":
        case "Hora Entrada":
        case "Hora Incio":
        case "Hora Fin":{
          group[input.key] = new FormControl(input.value === "" ? null : input.value, Validators.required);
          break;
        } 
        case "Fecha Salida":
        case "Hora Salida":{
          group[input.key] = new FormControl(input.value === "" ? null : input.value, Validators.required);
          //TODO: validar que salida sea mayor a entrada
          break;
        }
        case "Contraseña":{
          group[input.key] = new FormControl(input.value === "" ? null : input.value, [
            Validators.required,
            Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d^a-zA-Z0-9].{7,50}$")
          ]);
          break;
        }
        case "Código de Seguridad":{
          group[input.key] = new FormControl(input.value === "" ? null : input.value, Validators.pattern("[0-9]{6}"));
          break;
        }
        default:{
          group[input.key] = new FormControl(input.value === "" ? null : input.value);
          break;
        }
      }
    });
    let fb = new FormBuilder();
    return fb.group(group, {validator: InputValidator.ValidateGreater})
  }

  getInputs(clase: string, id: string): Observable<InputBase<any>[]>{
    let inputs: InputBase<any>[] = [];
    
    return this.http.get("/JSON/" + clase + ".json").map(data => data.json())
      .map((data) => {
        if(id === "0"){
          return data.find(x => x.id === "1");
        }
        else
          return data.find(x => x.id === id);
        
      })
      .map(data =>{
        let i = 1;
        for (var key in data) {
          if(key === "id")
            continue;
          switch(this.setType(key)){
            case "textbox": {
              let input = new TextboxInput({
                key: key,
                label: key,
                value: id === "0" ? null : data[key],
                order: i,
              });
              if(key === "Contraseña")
                input.type = "password";
              inputs.push(input);
              break;
            }
            case "number": {
              let input = new NumberInput({
                key: key,
                label: key,
                value: id === "0" ? null : data[key],
                order: i
              });
              inputs.push(input);
              break;
            }
            case "date": {
              let input = new DateInput({
                key: key,
                label: key,
                value: id === "0" ? null : data[key],
                order: i
              });
              inputs.push(input);
              break;
            }
            case "time": {
              let input = new TimeInput({
                key: key,
                label: key,
                value: id === "0" ? null : data[key],
                order: i
              });
              inputs.push(input);
              break;
            }
            case "dropdown": {
              let input = new DropdownInput({
                key: key,
                label: key,
                options: key === "Rol" ? [
                  {key: key, value: "Admin", checked: data[key] === "Admin"},
                  {key: key, value: "Cliente", checked: data[key] === "Cliente"},
                  {key: key, value: "Empleado", checked: data[key] === "Empleado"}
                ] : [
                  {key: key, value: "Mozo", checked: data[key] === "Mozo"},
                  {key: key, value: "Cocinero", checked: data[key] === "Cocinero"},
                  {key: key, value: "Encargado", checked: data[key] === "Encargado"}
                ],
                order: i
              });
              inputs.push(input);
              break;
            }
            case "checkbox": {
              let opciones = [];
              if(id !== "0"){
                opciones = data[key];
              }
              else{
                data[key].forEach(element => {
                  element.checked = false;
                });
                opciones = data[key];
              }
              let input = new CheckboxInput({
                key: key,
                label: key,
                options: opciones,
                order: i
              });
              inputs.push(input);
              break;
            }
          }
          i++;
        }
      
        return inputs.sort((a, b) => a.order - b.order);      
      });

  }

  setType(key: string): string{
    switch(key){
      case "Nombre":
      case "Descripción":
      case "Apellido":
      case "Usuario":
      case "Contraseña": 
      case "Email": return "textbox";
      case "Precio":
      case "Calorías":
      case "Tiempo Preparación":
      case "DNI":
      case "Código de Seguridad":
      case "Teléfono": return "number";
      case "Restricciones": 
      case "Artículos": 
      case "Secciones": return "checkbox";
      case "Hora Entrada":
      case "Hora Salida":
      case "Hora Inicio":
      case "Hora Fin": return "time";
      case "Fecha Entrada":
      case "Fecha Salida":
      case "Fecha Baja": 
      case "Fecha Creación": return "date";
      case "Puesto": 
      case "Rol": return "dropdown";
      default: return "textbox";
    }
  }
}