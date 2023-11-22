import { Component, OnInit } from '@angular/core';
import { CustomersAdmin } from '../../../shared/customers-admin.model';
import {NgForm} from '@angular/forms';
import { Admin } from './admin.model';
import { Injectable, Type } from '@angular/core';
import {Form, NgModel} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Response,RequestOptions, Headers, HttpModule, Http,URLSearchParams, RequestMethod} from '@angular/http';
import {platformBrowser} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  admin = {
    Id : null,
    firstName : "",
    lastName : "",
    email : "",
    cellNo : null,
    phNo : null,
    companyName : "",
    UserName : "",
    password: "",
    designation: ""
  } 
  


  constructor(private http : Http) { }

  ngOnInit() {

    
  }

  onSubmit()
  {
    var data = JSON.stringify(this.admin);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Authorization', localStorage.getItem('Authorization'));
    let req = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this.http.post('http://localhost:50555/api/customersAdmins', this.admin, req).map(x => x.json()).subscribe(data =>{
      console.log(data);
    });
  }

}
