import { Injectable, Type } from '@angular/core';
import {Form} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Response,RequestOptions, Headers, HttpModule, Http,URLSearchParams, RequestMethod} from '@angular/http';
import {platformBrowser} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { UserModel } from './user-model.model';

@Injectable()
export class AdminService {


  readonly rootUrl = "http://localhost:50555/api/";

  userData : UserModel;

  constructor(private http: Http) { }

  postUser(user: UserModel)
  {
    var data = JSON.stringify(this.userData);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Authorization', localStorage.getItem('Authorization'));
    let req = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this.http.post(this.rootUrl+'customers', data, req).map(x => x.json());
  }

}
