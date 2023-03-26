import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './System/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './System/footer/footer.component';
import { VehiclePublishComponent } from './components/vehicle-publish/vehicle-publish.component'; //add form module
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    VehiclePublishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //add form module
    HttpClientModule , //connect with api
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
