import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {path: "", component: HomeComponent},{path: "error", component: ErrorComponent},
  {path: "listado/:clase", component: ListComponent},
  {path: "listado/:clase/:accion/:id", component: FormComponent},
  {path: "listado/:clase/:accion", component: FormComponent},
  {path: "login", component: LoginFormComponent},
  {path: "register", component: RegisterFormComponent},
  
  {path: "**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
