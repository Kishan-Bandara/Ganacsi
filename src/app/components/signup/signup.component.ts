import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
  

})
export class SignupComponent implements OnInit {

  fname: string = '';
  lname: string ='';
  email: string = '';
  phonenumber: number = 0; 
  gpsLocation: string='';
  city: string='';
  nicpp: string='';
  occupation: string='';
  password: string = '';
  confirmpassword: string ='';

 

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    // Handle form submission here
    console.log(this.fname);
    // alert("EMAIL : " + this.email );
    // alert("PASSWORD : " + this.password );
    // alert("FIRSTNAME : " + this.fname );
    //alert("Output : " + this.lname );
    //  alert("PHONENO : " + this.phonenumber );
    //  alert("LOCATION : " + this.gpsLocation);
    //  alert("LOCATION : " + this.city);
    //  alert("LOCATION : " + this.nicpp);
    //   alert("LOCATION : " + this.occupation);
     alert("CONFIRMPASSWORD : " + this.confirmpassword);


  }

  uploadImage(){
    alert('image')
  }

}
