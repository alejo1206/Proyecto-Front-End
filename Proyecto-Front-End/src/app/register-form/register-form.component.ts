import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from './password-validator';
import { ListService } from '../list.service';
import { FormService } from '../form.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  rForm: FormGroup;

  constructor(private fb: FormBuilder, private listService: ListService, private formService: FormService) { 
    this.createForm();
  }

  ngOnInit() {
    this.listService.getLast("usuarios").subscribe(data => {
      console.log(data);
    })
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
    
  }

}
