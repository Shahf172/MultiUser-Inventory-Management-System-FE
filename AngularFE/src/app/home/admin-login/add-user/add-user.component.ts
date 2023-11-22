import { Component, OnInit } from '@angular/core';
import { CustomersAdmin } from '../../../shared/customers-admin.model';
import {NgForm} from '@angular/forms';
import { Injectable, Type } from '@angular/core';
import {Form, NgModel} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Response,RequestOptions, Headers, HttpModule, Http,URLSearchParams, RequestMethod} from '@angular/http';
import {platformBrowser} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user = {
    Id : null,
    firstName : '',
    lastName : '',
    userName : '',
    email : '',
    designation: '',
    password: '',
    adminId : 1, 
  }
  constructor(private http: Http) { }

  
  ngOnInit() {

  }

 /* resetForm(userForm?: NgForm)
  {
    userForm.reset();
    this.adminService.userData={
      Id : null,
      firstName : '',
      lastName : '',
      userName : '',
      email : '',
      designation: '',
      password: '',
      adminId : null, 
    }
  }*/
 /* resetForm(userForm?: NgForm)
  {
    userForm.reset();
    this.adminService.userData={
      Id : null,
      firstName : '',
      lastName : '',
      userName : '',
      email : '',
      designation: '',
      password: '',
      adminId : null, 
    }
  }*/
  onSubmit()
  {
    var data = JSON.stringify(this.user);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Authorization', localStorage.getItem('Authorization'));
    let req = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this.http.post('http://localhost:50555/api/customers', this.user, req).map(x => x.json()).subscribe(data =>{
      console.log(data);
    });
  }
}
