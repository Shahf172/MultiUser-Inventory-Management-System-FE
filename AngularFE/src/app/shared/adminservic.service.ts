import { Injectable, Type } from '@angular/core';
import {Form, NgModel} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Response,RequestOptions, Headers, HttpModule, Http,URLSearchParams, RequestMethod} from '@angular/http';
import {platformBrowser} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { SystemsList } from './systems-list.model';
import { UsersList } from './users-list.model';
import { User } from './user.model';
import { CustomerSystem } from './customer-system.model';
import { CustomersAdmin } from './customers-admin.model';
//import { CustomerSystem } from './customer-system.model';



@Injectable()
export class AdminservicService {
  readonly rootUrl = "http://localhost:50555/api/";

  systemsList : SystemsList[];
  usersList : UsersList[];
  userData: User;
  adminData: CustomersAdmin[];
 // assignSystem : CustomerSystem;

  constructor(private http: Http ) { }

userAuthentication(username, password)
{
  let authToken : string = btoa (username+':'+password)
  
  let headers = new Headers();
  
  headers.append( "Authorization", "Basic " + authToken   );
  headers.append("Content-Type", "application/json");
  let req = new RequestOptions();
  req.headers = headers;
  
  
  return this.http.get(this.rootUrl+'Log_In', req);
  }

  getAdminSystems()
  {
    let headers = new Headers();
    headers.append('Authorization', localStorage.getItem('Authorization'));
    let req = new RequestOptions();
    req.headers = headers;
    this.http.get(this.rootUrl+'adminSystems', req).map((data: Response)=>{
      return data.json() as SystemsList[];
    }).toPromise().then(x => {
      this.systemsList = x;
    })
    
  }

  getAdminDetails()
  {
    let headers = new Headers();
    headers.append('Authorization', localStorage.getItem('Authorization'));
    let req = new RequestOptions();
    req.headers = headers;
    this.http.get(this.rootUrl+'Log_In', req).map((data: Response)=>{
      return data.json() as CustomersAdmin[];
    }).toPromise().then(x => {
      this.adminData = x;
    })
    
  }

  getUsersList()
  {
    let headers = new Headers();
    headers.append('Authorization', localStorage.getItem('Authorization'));
    let req = new RequestOptions();
    req.headers = headers;
    this.http.get(this.rootUrl+'customers', req).map((data: Response) => {
      return data.json() as UsersList[];
    }).toPromise().then(x => {
      this.usersList = x;
    })
    
  }
/*
  */
  // add user
  postUser(user: User)
  {
    var data = JSON.stringify(user);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Authorization', localStorage.getItem('Authorization'));
    let req = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this.http.post(this.rootUrl+'customers', data, req).map(x => x.json());
  }

  //assign system to user
  
  postSystem(assignVals: CustomerSystem )
  {
    var data = JSON.stringify(assignVals);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Authorization', localStorage.getItem('Authorization'));
    let req = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this.http.post(this.rootUrl+'customerSystems', data, req).map(x => x.json());
  }

}


