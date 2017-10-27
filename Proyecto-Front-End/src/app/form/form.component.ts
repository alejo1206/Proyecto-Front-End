import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormService } from '../form.service';
import { ActivatedRoute } from '@angular/router';
import { FormEntity } from './form-entity';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private http: Http, private service: FormService, private route: ActivatedRoute) { }

  private entity: FormEntity;
  private clase;
  private accion;
  private id;

  ngOnInit() {
    this.route.params.subscribe((params) =>{
      this.clase = params["clase"];
      this.accion = params["accion"];
      params["id"] === undefined ? this.id = "0" : this.id = params["id"];
      this.getOne(this.clase, this.id);
    });
  }

  getOne(clase, id):void{
    if(this.accion === "eliminar"){
      (<HTMLInputElement> document.getElementById("fieldset")).disabled = true;
    }
    let sub = this.service.getOne(clase, id).subscribe(resp => {
      let entidad = new FormEntity(resp, this.accion, this.id);
      this.entity = entidad;
      sub.unsubscribe();
    });
  }
}