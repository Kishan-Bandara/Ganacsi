import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { userDetails } from 'src/app/Models/userDetails';
import { SaleService } from 'src/app/Services/Sale/sale.service';
import { ActivatedRoute, Router, Routes, RouterModule } from '@angular/router'; // add router class

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  constructor(
    // add router class
    private activatedRoute: ActivatedRoute,
    private router: Router
 ) { }

 ngOnInit(): void {
 }
 vehicleSale(){
   debugger;
   this.router.navigate(['/vehiclesale']);
 }

 propertySale(){
   debugger;
   this.router.navigate(['/rent']);
 }


}
