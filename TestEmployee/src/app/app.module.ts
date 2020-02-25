import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPageComponent } from './page/app-page.component';
import { AppService } from './app.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './page/add/add-employee.component';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { CalendarModule } from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';

@NgModule({
  declarations: [
    AppComponent,
    AppPageComponent,
    AddEmployeeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    CalendarModule,
    InputTextModule,
    MessagesModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
