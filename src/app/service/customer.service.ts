import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http: HttpClient) {}

  public GetCustomer(externalCode: string): Observable<any> {

    const url = `${environment.apiFatban.url}/LandingPages/SelfHire/${externalCode}`;
    const options = { headers:new HttpHeaders({
      'Content-Type': 'application/json', 
      'apiKey': environment.apiFatban.token, 

    })};
    const response = this.http.get(url,options);
    return response;
  }
}
