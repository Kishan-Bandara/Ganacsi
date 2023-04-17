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
import { ToastrModule } from 'ngx-toastr'; // notification
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons'; //ngx-boostrap
import { AlertModule } from 'ngx-bootstrap/alert'; //ngx-boostrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';//ngx-boostrap
import { TooltipModule } from 'ngx-bootstrap/tooltip';//ngx-boostrap
import { ModalModule } from 'ngx-bootstrap/modal';//ngx-boostrap

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
    BrowserAnimationsModule,//Notification
    ToastrModule.forRoot(),//Notification
    //NgbModule, //Open Model
    ButtonsModule.forRoot(),//ngx-model
    AlertModule.forRoot(),//ngx-model
    BsDropdownModule.forRoot(),//ngx-model
    TooltipModule.forRoot(),//ngx-model
    ModalModule.forRoot(),//ngx-model
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
