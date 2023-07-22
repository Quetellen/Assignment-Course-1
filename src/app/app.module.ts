import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactComponent,
    LoginComponent,
    AppointmentComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
