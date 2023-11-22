import { Injectable, Type } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Response,RequestOptions, Headers, HttpModule, Http,URLSearchParams} from '@angular/http';
import {platformBrowser} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { AllSystemsComponent } from '../home/tajmac-login/all-systems/all-systems.component';
import { AdminsListComponent } from '../home/tajmac-login/admins-list/admins-list.component';
import { CustomersAdmin } from './customers-admin.model';
import { SystemsDetail } from './systems-detail.model';

@Injectable()
export class TajmacServiceService {
  readonly rootUrl = "http://localhost:50555/api/";

  systemsList : SystemsDetail[];
  adminsList : CustomersAdmin[];

  constructor(private http: Http) { }
  userAuthentication(username, password)
  {
    let authToken : string = btoa (username+':'+password)
    
    let headers = new Headers();
    
    headers.append( "Authorization", "Basic " + authToken   );
    headers.append("Content-Type", "application/json");
    let req = new RequestOptions();
    req.headers = headers;
    
    
    return this.http.get(this.rootUrl+'customersAdmins', req);
    }
  
    getAdminsList()
    {
      let headers = new Headers();
      headers.append('Authorization', localStorage.getItem('Authorization'));
      let req = new RequestOptions();
      req.headers = headers;
      this.http.get(this.rootUrl+'customersAdmins', req).map((data: Response)=>{
        return data.json() as CustomersAdmin[];
      }).toPromise().then(x => {
        this.adminsList = x;
      })
      
    }
  
    getSystemsList()
    {
      let headers = new Headers();
      headers.append('Authorization', localStorage.getItem('Authorization'));
      let req = new RequestOptions();
      req.headers = headers;
      this.http.get(this.rootUrl+'systemsDetails', req).map((data: Response) => {
        return data.json() as SystemsDetail[];
      }).toPromise().then(x => {
        this.systemsList = x;
      })
      
    }

}
