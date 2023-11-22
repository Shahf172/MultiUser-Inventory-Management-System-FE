import { Injectable, Type } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Response,RequestOptions, Headers, HttpModule, Http,URLSearchParams} from '@angular/http';
import {platformBrowser} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpRequest } from 'selenium-webdriver/http';
import { CustSystem } from '../home/admin-login/sharedService/cust-system.model';
import { CustomerDto } from './customer-dto.model';

@Injectable()
export class UserServiceService {
  readonly rootUrl = "http://localhost:50555/api/";
  custSys : CustSystem[];
  userData : CustomerDto[];
  constructor(private http: Http) {}

  userSignIn(username, password)
  {
    let authToken = btoa(username+':'+password);
    let headers = new Headers;
    headers.append( "Authorization", "Basic " + authToken );
    headers.append("Content-Type", "application/json");

    let req = new RequestOptions();
    req.headers = headers;

    return this.http.get(this.rootUrl+'customerSystems', req);
  }

  getUserSys()
  {
    let headers = new Headers();
    headers.append('Authorization', localStorage.getItem('Authorization'));
    let req = new RequestOptions();
    req.headers = headers;
    this.http.get(this.rootUrl+'customerSystems', req).map((data: Response) => {
      return data.json() as CustSystem[];
    }).toPromise().then(x => {
      this.custSys = x;
    })
    
  }

  getUserDetails()
  {
    let headers = new Headers();
    headers.append('Authorization', localStorage.getItem('Authorization'));
    let req = new RequestOptions();
    req.headers = headers;
    this.http.get(this.rootUrl+'customerLogIn', req).map((data: Response)=>{
      return data.json() as CustomerDto[];
    }).toPromise().then(x => {
      this.userData = x;
    })
    
  }

}
