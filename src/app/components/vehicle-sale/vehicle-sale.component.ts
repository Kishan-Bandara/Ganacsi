import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { userDetails } from 'src/app/Models/userDetails';
import { VehicleSale } from 'src/app/Models/vehicleSale';
import { VehicleSaleService } from 'src/app/Services/Sale/VehicleSale/vehicle-sale.service';
import { DatePipe } from '@angular/common'; //date

@Component({
  selector: 'app-vehicle-sale',
  templateUrl: './vehicle-sale.component.html',
  styleUrls: ['./vehicle-sale.component.css'],
  providers: [DatePipe]
})
export class VehicleSaleComponent implements OnInit {

  Email: string = '';
  contactNumber:string ='';
  location: string='';
  locationpublish? :string;
  date?:Date;
  brandname: string = '';
  vehiclemodel: string ='';
  vehiclesubcategory: string='';
  vehiclecondition: string='';
  vehicleimages: string='';
  manufacture: string='';
  mileage: string='';
  enginecapacity: string='';
  transmission: string='';
  fueltype: string='';
  price: string='';
  description: string='';
  currentDateTime!: string; // date

  vehicleSale?: VehicleSale; //Define userDetails Array

  brandOptions = [
    {value: 'nissan', label: 'Nissan'},
    {value: 'toyota', label: 'Toyota'},
    {value: 'suzukie', label: 'Suzukie'},
    {value: 'honda', label: 'Honda'}
  ]
  
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
    private datePipe: DatePipe //date
  ) {
    this.currentDateTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd % HH:mm:ss')!; //date
   }

  ngOnInit(): void {

    this.Email ="janaka@gmail.com" ;
      //Find Email Exist or not
    this.vehicleSaleService.GetByEmailUserDetailRecordMongo(this.Email)
    .subscribe((userDetails: any) => {
      if(userDetails != null){      
        
        // alert(userDetails);
        console.log(userDetails);
  
        this.contactNumber = userDetails[Object.keys(userDetails)[4]];
        console.log(this.contactNumber);
  
        //this.contact = this.phoneNo;
  
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
      this.vehicleSale ={
        Id  :'' ,
        VehicleBrand : this.brandname,
        VehicleModel : this.vehiclemodel,
        VehicleSubCategory : this.vehiclesubcategory,
        VehicleCondition : this.vehiclecondition,
        Manufacture : this.manufacture,
        Mileage : this.mileage,
        Price : this.price,
        Description : this.description,
        Location : this.location,
        ContactNo : this.contactNumber,
        VehicleSaleAddDate : this.currentDateTime,
        UserEmail : this.Email,
        EngineCapacity : this.enginecapacity,
        FuelType : this.fueltype,
        Transmission : this.transmission,
        ImagePath : this.vehicleimages
        }

        if((this.vehicleSale.VehicleBrand != '') 
        && (this.vehicleSale?.VehicleModel != '')
        && (this.vehicleSale?.VehicleSubCategory != '')
        &&(this.vehicleSale?.VehicleCondition !='')
        &&(this.vehicleSale?.Manufacture !='')
        &&(this.vehicleSale?.Price !='')
        &&(this.vehicleSale?.ContactNo !='')
        &&(this.vehicleSale?.EngineCapacity !='')
        &&(this.vehicleSale?.FuelType !='')
        &&(this.vehicleSale?.Transmission !='')
        )
        {

        //VehicleSale-Insert
        this.vehicleSaleService
        .InsertVehicleSaleRecordMongo(this.vehicleSale)
        .subscribe(vehicleSale => {
          debugger;
          console.log(this.vehicleSale);
         
      
      
            }
        );

        this.brandname =  '',
        this.vehiclemodel= '',
        this.vehiclesubcategory='',
        this.vehiclecondition='',
        this.manufacture='',
        this.mileage='',
        this.price='',
        this.description='',
        this.location='',
        //this.contactNumber='',
        this.enginecapacity='',
        this.fueltype='',
        this.transmission='',
        this.vehicleimages=''
        this.showSuccess('All done','Done');
          }
          else{

            if(this.vehicleSale.VehicleBrand == '')
            {
              this.showError('Brand name should not be empty' , 'Brand Name');
            }
            else if
            (this.vehicleSale?.VehicleModel== '')
            { 
              this.showError('Vehicle Model should not be empty' , 'Model Name');
            }
            else if
            (this.vehicleSale?.VehicleSubCategory == '')
            { 
              this.showError('Subcategory should not be empty' , 'Vehicle Subcategory');
            }
            else if
            (this.vehicleSale?.VehicleCondition== '')
            { 
              this.showError('Condition should not be empty' , 'Vehicle Condition');
            }
            else if
            (this.vehicleSale?.Manufacture == '')
            { 
              this.showError('Manufacture year should not be empty' , 'Vehicle Manufacture');
            }
            else if
            (this.vehicleSale?.Price == '')
            { 
              this.showError('Price should not be empty' , 'Vehicle Price');
            }
            else if
            (this.vehicleSale?.ContactNo == '')
            { 
              this.showError('ContactNo should not be empty' , 'Contact No');
            }
            else if
            (this.vehicleSale?.EngineCapacity == '')
            { 
              this.showError('Engine Capacity should not be empty', 'Vehicle Engine Capacity');
            }
            else if
            (this.vehicleSale?.FuelType == '')
            { 
              this.showError('Fuel Type should not be empty' , 'Vehicle Fuel Type');
            }
            else if
            (this.vehicleSale?.Transmission =='')
            { 
              this.showError('Transmission should not be empty' , 'Vehicle Transmission');
            }

          }

     // alert(this.vehiclecondition);
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
  
//uploadImage
  onFileSelected(event : any): void {
    debugger;
      const file: File = event.target.files[0];
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
    
      this.vehicleSaleService.ImageSaveToFolder(formData)
      .subscribe((response: any) =>{
        //console.log(response);
        this.vehicleimages = response.filename + '.jpg';
        console.log(this.vehicleimages +'.jpg' );
        });
       
    }

}
