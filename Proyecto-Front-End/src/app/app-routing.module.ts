import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "error", component: ErrorComponent},
  {path: ":clase", component: ListComponent},
  {path: ":clase/:accion/:id", component: FormComponent},
  {path: ":clase/:accion", component: FormComponent},
  {path: "**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
