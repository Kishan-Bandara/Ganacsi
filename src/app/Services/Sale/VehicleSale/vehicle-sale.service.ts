import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { VehicleSale } from 'src/app/Models/vehicleSale';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class VehicleSaleService {

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

        /** POST: add a new User Detai to the database */
        InsertVehicleSaleRecordMongo (VehicleSale: VehicleSale): Observable<VehicleSale> {
          debugger;
          return this.http.post<VehicleSale>(this.REST_API_SERVER +"VehicleSale/InsertVehicleSaleRecordMongo",
          VehicleSale, httpOptions).pipe(
             // catchError(this.handleError('InsertStockToStockMultipleTransferHeaderRecode', headerRecode))
            );
        }

    //Save Image in folder
    ImageSaveToFolder(formData : any){
      return this.http.post(this.REST_API_SERVER + "VehicleSale/ImageSaveToFolder", formData)
    }

    uploadFile(filePath: string): Observable<any> {
      const formData = new FormData();
      formData.append('filePath', filePath);
      console.log(formData);
      return this.http.post(
        this.REST_API_SERVER +
        'SignUp/upload' ,
        formData 
      );
    }

    //Get folder path
    getFolderPath(folderName: string) {
      return this.http.get<string>( this.REST_API_SERVER +'/api/folder/path')
    }


}
