import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { VehiclePublishComponent } from './components/vehicle-publish/vehicle-publish.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vehiclepublish', component: VehiclePublishComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
