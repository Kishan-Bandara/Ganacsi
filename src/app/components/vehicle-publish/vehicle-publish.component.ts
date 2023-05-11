import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes, RouterModule } from '@angular/router'; // add router class

@Component({
  selector: 'app-vehicle-publish',
  templateUrl: './vehicle-publish.component.html',
  styleUrls: ['./vehicle-publish.component.css']
})
export class VehiclePublishComponent implements OnInit {

  constructor(
     // add router class
     private activatedRoute: ActivatedRoute,
     private router: Router
  ) { }

  ngOnInit(): void {
  }
  sale(){
    debugger;
    this.router.navigate(['/sale']);
  }

  rent(){
    debugger;
    this.router.navigate(['/rent']);
  }
}
