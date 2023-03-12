import { Component } from '@angular/core';
import {NavbarComponent} from './System/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ganacsi';

  constructor(
    // add router class
    private router: Router
  ) { }


  // signUp() {
  //   debugger;
  //   alert('hi');
  //   this.router.navigate(['/signup']);
  // }
}
