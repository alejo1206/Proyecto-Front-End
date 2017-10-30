import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { CurrPipe } from './curr.pipe';
import { HomeComponent } from './home/home.component';
import { ListService } from './list.service';
import { FormService } from './form.service';
import { RegisterFormComponent } from './register-form/register-form.component';
import { InputService } from './input.service';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    FooterComponent,
    ErrorComponent,
    HeaderComponent,
    ListComponent,
    FormComponent,
    CurrPipe,
    HomeComponent,
    RegisterFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ListService, FormService, InputService],
  bootstrap: [AppComponent]
})
export class AppModule { }
