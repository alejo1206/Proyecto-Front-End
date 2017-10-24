import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

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
    CurrPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
