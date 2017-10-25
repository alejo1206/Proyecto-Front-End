import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: ":clase", component: ListComponent},
  {path: ":clase/:id", component: ListComponent},
  //{path: "*/*", component: FormComponent},
  //{path: "*/*/:id", component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
