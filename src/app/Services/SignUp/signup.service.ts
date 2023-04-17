import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { userDetails } from 'src/app/Models/userDetails';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private url = "SignUp";

  private REST_API_SERVER = environment.apiUrl; //To initiate apiURL

  constructor(private http : HttpClient) { }

  // public getUsers() {
  // debugger;
  //   return  this.http.get(this.REST_API_SERVER + "SignUp");
  // }

  public getUsers() : Observable<userDetails[]>{
    debugger;
      //return  this.http.get<userDetails[]>(`${environment.apiUrl}/${this.url}`);
      return  this.http.get<userDetails[]>(this.REST_API_SERVER + "SignUp");
    }

  // public createUser(userDetails : userDetails){
  //   return this.http.post(this.REST_API_SERVER + "SignUp",
  //   userDetails, httpOptions).pipe(
  //     // catchError(this.handleError('InsertStockToStockMultipleTransferHeaderRecode', headerRecode))
  //    );
  // }

    /** POST: add a new User Detai to the database */
    InsertUserDetailRecordMongo (userDetails: userDetails): Observable<userDetails> {
      debugger;
      return this.http.post<userDetails>(this.REST_API_SERVER +"SignUp/InsertUserDetailRecordMongo",
      userDetails, httpOptions).pipe(
         // catchError(this.handleError('InsertStockToStockMultipleTransferHeaderRecode', headerRecode))
        );
    }


}
