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
  VallidateEmail? : boolean;
  selectedFile: File | null = null;
  folderPath?: string;
  profilePicture: string = '';

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
        // console.log(serverdata[0]); 
      }
      
    );
  }

  onSubmit(template: TemplateRef<any>) {

    this.userDetails = {
        Id : '' ,   
        FirstName:  this.fname,
        LastName : this.lname,
        Email : this.email,
        PhoneNo : this.phonenumber,
        Location : this.gpsLocation,
        City : this.city,
        ProfilePicture : this.profilePicture,
        Nic : this.nicpp,
        Occupation : this.occupation,
        Password : this.password
    }

  this.VallidateEmail = this.validateEmail(this.userDetails?.Email);

  //console.log(this.VallidateEmail);

//Find Email Exist or not
  this.signupService.GetByEmailUserDetailRecordMongo(this.userDetails?.Email)
    .subscribe((userDetails) => {
      debugger;
      if(userDetails != null){      
        this.showError('Email is exixting' , 'Email Exist');
      }
      else{
        this.showSuccess('Email is not exixting' , 'Email Not Exist');
 
        if((this.confirmpassword == this.userDetails?.Password) 
        && (this.userDetails?.Password != '')
        && (this.userDetails?.FirstName != '')
        &&(this.userDetails?.LastName !='')
        &&(this.userDetails?.Email !='')
        &&(this.userDetails?.PhoneNo !='')
        &&(this.userDetails?.City !='')
        &&(this.userDetails?.Nic !='')
        &&(this.VallidateEmail == true)
        )
        {
        this.signupService
        .InsertUserDetailRecordMongo(this.userDetails)
        .subscribe(userDetails => {
          debugger;
          console.log(this.userDetails);
          // console.log(this.userDetails?.Password);
      
      
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
        this.profilePicture='';
        this.showSuccess('All done','Done');
        }

          else{
            console.log(this.confirmpassword);
            console.log(this.userDetails?.Password);

            if(this.userDetails?.FirstName == '')
            {
              this.showError('First name should not be empty' , 'First Name');
            }
            else if
            (this.userDetails?.LastName == '')
            { 
              this.showError('Last name should not be empty' , 'Last Name');
            }
            else if
            (this.userDetails?.Email == '')
            { 
              this.showError('Email should not be empty' , 'Email');
            }
            else if
            (this.userDetails?.PhoneNo == '')
            { 
              this.showError('Phone Number should not be empty' , 'Phone Number');
            }
            else if
            (this.userDetails?.City == '')
            { 
              this.showError('City should not be empty' , 'City');
            }
            else if
            (this.userDetails?.Nic == '')
            { 
              this.showError('Nic should not be empty' , 'NIC');
            }
            else if
            (this.userDetails?.Password == '')
            { 
              this.showError('Passowrds empty' , 'Password');
            }
            else if
            (this.confirmpassword == '')
            { 
              this.showError('Confirm Passowrd empty' , 'Password');
            }
            else if
            (this.VallidateEmail == false)
            { 
              this.showError('Email not correct' , 'Email wrong');
            }
            else if
            (this.confirmpassword != this.userDetails?.Password)
            { 
              this.showError('Passowrds are not match' , 'Password');
            }
          } 

        }
      });
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

//Email Validation
validateEmail(email: string): boolean {
  debugger;
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  //this.showError('Email' , 'Email Not Correct');
  //console.log(emailRegex.test(email));
  return emailRegex.test(email);
}

//Upload Image
selectFile(): void {
  // debugger;
  // const fileInputElement = document.getElementById('fileInput');
  // if (fileInputElement) {
  //   fileInputElement.click();
  // }
}

onFileSelected(event : any): void {
debugger;
  const file: File = event.target.files[0];
  const formData: FormData = new FormData();
  formData.append('file', file, file.name);

  this.signupService.ImageSaveToFolder(formData)
  .subscribe((response: any) =>{
    //console.log(response);
    this.profilePicture = response.filename + '.jpg';
    console.log(this.profilePicture +'.jpg' );
    });
   
}


}
