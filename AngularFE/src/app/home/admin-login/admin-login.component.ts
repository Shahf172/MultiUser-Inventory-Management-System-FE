import { Component, OnInit } from '@angular/core';
//import { Admin } from '../../shared/admin.model';
//import {systemsDetail} from '../../shared/systemDetails';
import { AdminservicService } from '../../shared/adminservic.service';
import { HttpErrorResponse,HttpClient, HttpHeaders } from '@angular/common/http';
import {Response,RequestOptions, Headers, HttpModule, Http,URLSearchParams} from '@angular/http';
import { Routes, Router } from '@angular/router';
import { AdminService } from './sharedService/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers: [AdminService]
  
})
export class AdminLoginComponent implements OnInit {

  //let detail[] = systemsDetail;
  constructor(private adminService: AdminservicService, private router: Router, private admService: AdminService) { 
  
  }
 
  ngOnInit() {
    
  }

  onSubmit(username, password)
  {
    this.adminService.userAuthentication(username,password).subscribe((data:any)=>{
      console.log(data.json());
      localStorage.setItem('Authorization','Basic '+btoa(username+':'+password));
      console.log(localStorage.getItem('Authorization'));
      this.router.navigateByUrl('/adminHome');
      //localStorage.setItem('Authorization', data.);

    });

  
  }
  string :"Welcome";
    
  systemDetailPost()
  {

  }
}
