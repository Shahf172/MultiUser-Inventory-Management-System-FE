import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { AdminservicService } from '../../shared/adminservic.service';
import { HttpErrorResponse,HttpClient, HttpHeaders } from '@angular/common/http';
import {Response,RequestOptions, Headers, HttpModule, Http,URLSearchParams} from '@angular/http';
import { TajmacServiceService } from '../../shared/tajmac-service.service';
//import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-tajmac-login',
  templateUrl: './tajmac-login.component.html',
  styleUrls: ['./tajmac-login.component.css']
})
export class TajmacLoginComponent implements OnInit {

  constructor(private router: Router, private tajmacService: TajmacServiceService) { }

  ngOnInit() {
  }

  onSubmit(username, password)
  {
    this.tajmacService.userAuthentication(username,password).subscribe((data:any)=>{
      console.log(data.json());
      localStorage.setItem('Authorization','Basic '+btoa(username+':'+password));
      console.log(localStorage.getItem('Authorization'));
      this.router.navigateByUrl('/tajmacHome');
      //localStorage.setItem('Authorization', data.);

    });

    
}
}
