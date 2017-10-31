import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  rForm: FormGroup;
  userExists: boolean = true;
  user: User;

  constructor(private fb: FormBuilder, private service: FormService, private router: Router, private us: UserService) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.rForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  submit(){
    this.service.getUser(this.rForm.controls["username"].value, this.rForm.controls["password"].value).subscribe(data => {
      if(data === undefined){
        this.userExists = false;
      }
      else{
        this.user = new User(data["Nombre"], data["Apellido"], data["Rol"]);
        this.us.setUser(this.user);
        this.router.navigate([""]);
      } 
    });
  }

}
