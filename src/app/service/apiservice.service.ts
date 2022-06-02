import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  

  constructor(private http : HttpClient) {
     
   }

   getUserData():Observable<any>{
     let url= "https://reqres.in/api/users?page=2"
     return this.http.get(url);
   }
}
