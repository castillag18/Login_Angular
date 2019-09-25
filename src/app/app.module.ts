import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material
import {MaterialModel} from './MaterialModel';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
