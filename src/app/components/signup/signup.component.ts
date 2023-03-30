import { Component, OnInit, TemplateRef } from '@angular/core';
import { userDetails } from 'src/app/Models/userDetails'; //Import the data model
import { SignupService } from 'src/app/Services/SignUp/signup.service'; //Import the service
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';//notificaton
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'; //ngx-model

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
  

})
export class SignupComponent implements OnInit {

  fname: string ='' ;
  lname: string ='';
  email: string ='';
  phonenumber: string = ''; 
  gpsLocation: string='';
  city: string='';
  nicpp: string='';
  occupation: string='';
  password: string='';
  confirmpassword: string='';

  userDetails?: userDetails; //Define userDetails Array

  modalRef?: BsModalRef; //ngx-model

  constructor( 
    private signupService : SignupService,
    private toastr: ToastrService, //Notification Service
    private modalService: BsModalService, //ngx-model
    ) { }

  ngOnInit(): void {

    this.signupService
    .getUsers().subscribe(
      (serverdata : any[]) => {
        debugger;
         console.log(serverdata[0]); 
      }
      
    );
  }

  onSubmit(template: TemplateRef<any>) {

   // this.toastr.success('Hello, world!', 'Toastr fun!');//Show notification 

   // this.showSuccess('All done','Done');//show nptification

   //this.modalRef = this.modalService.show(template); //open a model

    this.userDetails = {
        Id : '' ,   
        FirstName:  this.fname,
        LastName : this.lname,
        Email : this.email,
        PhoneNo : this.phonenumber,
        Location : this.gpsLocation,
        City : this.city,
        ProfilePicture : '',
        Nic : this.nicpp,
        Occupation : this.occupation,
        Password : this.password
    }
   
    //console.log(this.phonenumber);

    if(this.confirmpassword == this.userDetails?.Password){
    this.signupService
    .InsertUserDetailRecordMongo(this.userDetails)
    .subscribe(userDetails => {
      debugger;
      console.log(this.userDetails);
      console.log(this.userDetails?.Password);
  
  
        }
    );

    this.fname='' ;
    this.lname='';
    this.email ='';
    this.phonenumber= ''; 
    this. gpsLocation='';
    this.city='';
    this.nicpp='';
    this.occupation='';
    this.password='';
    this.confirmpassword='';
    this.showSuccess('All done','Done');
      }
      else{
        this.showError('Passowrds are not match' , 'Password');
      } 
    }



  

  uploadImage(){
    alert('image')
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
