import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { userDetails } from 'src/app/Models/userDetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private REST_API_SERVER = environment.apiUrl; //To initiate apiURL
  
  constructor(private http : HttpClient) { }

  //Search User with Email
  public GetByEmailUserDetailRecordMongo(Email:string){
    return this.http.get(
      this.REST_API_SERVER +
      'SignUp/GetByEmailUserDetailRecordMongo?Email=' +
      Email 
    );
  }

}
