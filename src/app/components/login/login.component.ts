import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    // Handle form submission here
    console.log(this.password);
    alert("EMAIL : " + this.email );
    alert("PASSWORD : " + this.password );
  }


}
