import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from './password-validator';
import { FormService } from '../form.service';
import { FormEntity } from '../form/form-entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  rForm: FormGroup;
  user: string;

  constructor(private fb: FormBuilder, private service: FormService, private router: Router) { 
    this.createForm();
  }

  ngOnInit() {}

  createForm(){
    this.rForm = this.fb.group({
      firstname: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("[a-zA-Z][a-zA-Z ]+")
      ]],
      lastname: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("[a-zA-Z][a-zA-Z ]+")
      ]],
      email: [null, [
        Validators.required, 
        Validators.email
      ]],
      username: [null, [
        Validators.required,
        Validators.minLength(3)
      ]],
      password: [null, [
        Validators.required,
        Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d^a-zA-Z0-9].{7,50}$")
      ]],
      confPassword: [null, [
        Validators.required,
        Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d^a-zA-Z0-9].{7,50}$")
      ]],
      check: [false, Validators.requiredTrue],
    }, {
      validator: PasswordValidator.MatchPasswords
    });
  }

  submit(){
    this.service.getLast("usuarios").subscribe(data => {
      let newUser: FormEntity = new FormEntity("", "crear", Number.parseInt(data["id"]) + 1);
      let labels: string[] = [];
      let values: string[] = [];
      for (var key in data) {
        labels.push(key);
      }
      values.push((Number.parseInt(data["id"]) + 1).toString());
      values.push(this.rForm.controls["username"].value);
      values.push(this.rForm.controls["password"].value);
      values.push(this.rForm.controls["firstname"].value);
      values.push(this.rForm.controls["lastname"].value);
      values.push(this.rForm.controls["email"].value);
      values.push("Cliente");
      values.push("");
      values.push("");
      values.push("");
      newUser.setLabels(labels);
      newUser.setValues(values);
      this.service.add(newUser, "usuarios");
      this.user = data["Apellido"] + ", " + data["Nombre"];
      this.router.navigate([""]);
    });
  }

}
