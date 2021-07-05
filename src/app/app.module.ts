import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ImagesComponent } from './images/images.component'; 
import {AuthGuard} from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
