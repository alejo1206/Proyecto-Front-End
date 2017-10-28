import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  rForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.rForm = this.fb.group({
      firstname: [null, [
        Validators.required,
        Validators.minLength(3)
      ]],
      lastname: [null, [
        Validators.required,
        Validators.minLength(3)
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
        Validators.minLength(3),
      ]],
      confPassword: [null, [
        Validators.required,
        Validators.minLength(3)
      ]],
      check: [null, Validators.requiredTrue],
    });
  }

}
