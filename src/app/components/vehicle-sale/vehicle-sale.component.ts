import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { userDetails } from 'src/app/Models/userDetails';
import { VehicleSaleService } from 'src/app/Services/Sale/VehicleSale/vehicle-sale.service';

@Component({
  selector: 'app-vehicle-sale',
  templateUrl: './vehicle-sale.component.html',
  styleUrls: ['./vehicle-sale.component.css']
})
export class VehicleSaleComponent implements OnInit {

  
  model?: string;
  Email?: string;
  phoneNo? :string;
  contact?:string;
  location? :string;
  locationpublish? :string;
  date?:Date;
  brandname: string = '';
  vehiclemodel: string ='';
  vehiclesubcategory: string='';
  vehiclecondition: string='';

  //brandOptions :[] ;

  brandOptions = [
    {value: 'nissan', label: 'Nissan'},
    {value: 'toyota', label: 'Toyota'},
    {value: 'suzukie', label: 'Suzukie'},
    {value: 'honda', label: 'Honda'}
  ];

  modelOptions =[
    {value: 'axio', label: 'Axio'},
    {value: 'vitz', label: 'Vitz'},
    {value: 'passo', label: 'Passo'}
  ];
  
  subcategoryOptions =[
    {value: 'buses', label: 'Buses'},
    {value: 'lorrytrucks', label: 'Lorry & Trucks'},
    {value: 'vans', label: 'Vans'},
    {value: 'threewheelers', label: 'Three-Wheelers'},
    {value: 'cars', label: 'Cars'},
    {value: 'mortorbikes', label: 'Motor Bikes'},
    {value: 'tractors', label: 'Tractors'}
  ];

  conditionOptions =[
    {value: 'brandnew', label: 'Brand New'},
    {value: 'recondition', label: 'Recondition'},
    {value: 'used', label: 'Used'}

  ];
  constructor(
    private vehicleSaleService : VehicleSaleService, 
    private toastr: ToastrService, //Notification Service
  ) { }

  ngOnInit(): void {

    this.brandname = ''
    this.vehiclemodel= ''
    this.vehiclesubcategory=''
    this.vehiclecondition=''

   

    this.date = new Date;

    console.log(this.date);

    this.Email ="krishan@gmail.com" ;
      //Find Email Exist or not
    this.vehicleSaleService.GetByEmailUserDetailRecordMongo(this.Email)
    .subscribe((userDetails: any) => {
      if(userDetails != null){      
        
        // alert(userDetails);
        console.log(userDetails);
  
        this.phoneNo = userDetails[Object.keys(userDetails)[4]];
        console.log(this.phoneNo);
  
        this.contact = this.phoneNo;
  
        this.location = userDetails[Object.keys(userDetails)[9]]
        console.log(this.location);
  
        this.locationpublish = this.location;
  
      }
      else{
        this.showError('Email is not exixting' , 'Email Not Exist');
      }
    });
  }
  
    
    onSubmit(){
      alert(this.vehiclecondition);
    }
  
    // Toster Service notification Desings - start
    showSuccess(body : string , header : string) {
      this.toastr.success(body,header, {
        timeOut: 3000,
        progressBar: true,
        positionClass: 'toast-top-right'
      });
    }
  
    showError(body : string , header : string) {
      this.toastr.error(body,header, {
        timeOut: 3000,
        progressBar: true,
        positionClass: 'toast-top-right'
      });
    }
  
    showWarning(body : string , header : string) {
      this.toastr.warning(body,header, {
        timeOut: 3000,
        progressBar: true,
        positionClass: 'toast-top-right'
      });
    }
  
    showInfo(body : string , header : string) {
      this.toastr.info(body,header, {
        timeOut: 3000,
        progressBar: true,
        positionClass: 'toast-top-right'
      });
    }
  // Toster Service notification Desings - End
  

}
