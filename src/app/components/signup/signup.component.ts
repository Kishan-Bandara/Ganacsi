import { Component, OnInit } from '@angular/core';
import { userDetails } from 'src/app/Models/userDetails'; //Import the model
import { SignupService } from 'src/app/Services/SignUp/signup.service'; //Import the service
import { Observable } from 'rxjs';

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
 

  constructor( private signupService : SignupService) { }

  ngOnInit(): void {
    // this.userDetails = this.signupService.getUsers();
    // console.log(this.userDetails);

    this.signupService
    .getUsers().subscribe(
      (serverdata : any[]) => {
        debugger;
         console.log(serverdata[0]); 
        // if(serverdata != null){
        //   this.fname = serverdata[0].firstName;
        //   this.lname = serverdata[0].lastName;
        //   this.email = serverdata[0].email
        //   this.nicpp = serverdata[0].nic;
        //   this.phonenumber = serverdata[0].phoneNo;
        //   this.gpsLocation = serverdata[0].location;
        //   this.city = serverdata[0].city;
        //   this.occupation = serverdata[0].occupation;
        // }
      }

      
    );
    

    // this.signupService.getUsers().subscribe(
    //   (userDetails : userDetails[]) => {
    //       debugger;
    //       return userDetails;
    //   }
    // );

  }

  onSubmit() {
    // Handle form submission here
    // console.log(this.fname);
    // alert("EMAIL : " + this.email );
    // alert("PASSWORD : " + this.password );
    // alert("FIRSTNAME : " + this.fname );
    // alert("Output : " + this.lname );
    //  alert("PHONENO : " + this.phonenumber );
    //  alert("LOCATION : " + this.gpsLocation);
    //  alert("LOCATION : " + this.city);
    //  alert("LOCATION : " + this.nicpp);
    //   alert("LOCATION : " + this.occupation);
    //  alert("CONFIRMPASSWORD : " + this.confirmpassword);
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
   
    console.log(this.phonenumber);

    this.signupService
    .InsertUserDetailRecordMongo(this.userDetails)
    .subscribe(userDetails => {
      debugger;
      console.log(this.userDetails);
      console.log(this.userDetails?.Password);
      if(this.confirmpassword == this.userDetails?.Password){
        alert("Password Set Sucessfully");
        
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
          
      }
      else{
        alert("Password not maching")
      }


    });



  }

  uploadImage(){
    alert('image')
  }

}
