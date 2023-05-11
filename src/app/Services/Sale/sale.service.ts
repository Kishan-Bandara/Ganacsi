import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

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
