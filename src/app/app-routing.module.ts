import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { VehiclePublishComponent } from './components/vehicle-publish/vehicle-publish.component';
import { SaleComponent } from './components/sale/sale.component';
import { RentComponent } from './components/rent/rent.component';
import { VehicleSaleComponent } from './components/vehicle-sale/vehicle-sale.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vehiclepublish', component: VehiclePublishComponent},
  { path: 'sale', component: SaleComponent },
  { path: 'rent', component: RentComponent },
  { path: 'vehiclesale', component: VehicleSaleComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
