import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes, RouterModule } from '@angular/router'; // add router class
import { SignupComponent } from 'src/app/components/signup/signup.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    // add router class
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    debugger;
    this.router.navigate(['/signup']);
  }

  logIn() {
    debugger;
    this.router.navigate(['/login']);
  }


}
