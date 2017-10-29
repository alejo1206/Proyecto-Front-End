import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InputBase } from './input-base';
import { DropdownInput } from './input-dropdown';
import { TextboxInput } from './input-textbox';
import { CheckboxInput } from './input-checkbox';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NumberInput } from './input-number';
import { DateInput } from './input-date';
import { TimeInput } from './input-time';


@Injectable()
export class InputService {

  constructor(private http: Http) { }

  toFormGroup(inputs: InputBase<any>[] ) {
    let group: any = {};

    inputs.forEach(input => {
      group[input.key] = input.required ? new FormControl(input.value || '', Validators.required)
                                              : new FormControl(input.value || '');
    });
    return new FormGroup(group);
  }

  getInputs(clase: string, id: string): Observable<any>{
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
          switch(this.setType(key)){
            case "textbox": {
              let input = new TextboxInput({
                key: key,
                label: key,
                value: id === "0" ? null : data[key],
                order: i
              });
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
        }
      
        return inputs.sort((a, b) => a.order - b.order);      
      });
           /*new DropdownInput({
             key: 'brave',
             label: 'Bravery Rating',
             options: [
               {key: 'solid',  value: 'Solid'},
               {key: 'great',  value: 'Great'},
               {key: 'good',   value: 'Good'},
               {key: 'unproven', value: 'Unproven'}
             ],
             order: 3
           }),

           new CheckboxInput({
            key: 'checkbox',
            label: 'Check',
            options: [
              {value: 'Solid', checked: false},
              {value: 'Great', checked: true},
              {value: 'Good', checked: false},
              {value: 'Unproven', checked: false}
            ],
            order: 4
          }),
      
           new TextboxInput({
             key: 'firstName',
             label: 'First name',
             value: 'Bombasto',
             required: true,
             order: 1
           }),
      
           new TextboxInput({
             key: 'emailAddress',
             label: 'Email',
             type: 'email',
             order: 2
           })
         ];*/

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
      case "Código de Seguridad": return "number";
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