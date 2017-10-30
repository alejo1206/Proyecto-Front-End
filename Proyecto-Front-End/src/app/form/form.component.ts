import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormService } from '../form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormEntity } from './form-entity';
import { InputBase } from '../input-base';
import { FormGroup } from '@angular/forms';
import { InputService } from '../input.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  inputs: InputBase<any>[] = [];
  form: FormGroup;
  clase;
  accion;
  id;

  constructor(private service: InputService, private route: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit() {
    this.route.params.subscribe((params) =>{
      this.clase = params["clase"];
      this.accion = params["accion"];
      params["id"] === undefined ? this.id = "0" : this.id = params["id"];
      if((this.clase !== "articulos" && this.clase !== "jornadas" && this.clase !== "menus" && 
         this.clase !== "repartidores" && this.clase !== "restricciones" && this.clase !== "secciones" && 
         this.clase !== "turnos" && this.clase !== "usuarios") || (this.accion !== "crear" && 
         this.accion !== "editar" && this.accion !== "eliminar") || isNaN(this.id)){
        this.router.navigate(["error"]);
      }
      else{
        this.setForm(this.clase, this.id);
      }
    });

  }

  setForm(clase, id){
    this.service.getInputs(clase, id).subscribe((data) => {
      this.inputs = data;
      this.form = this.service.toFormGroup(this.inputs);
    });
  }

  onSubmit(){    
    console.log(JSON.stringify(this.form.value));
  }

}