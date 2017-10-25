import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: ":clase", component: ListComponent},
  {path: ":clase/crear", component: FormComponent},
  {path: ":clase/editar/:id", component: FormComponent},
  {path: ":clase/eliminar/:id", component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
