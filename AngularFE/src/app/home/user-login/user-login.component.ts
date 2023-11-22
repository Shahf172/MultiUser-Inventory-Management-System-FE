import { Component, OnInit } from '@angular/core';
import {Routes, Router} from '@angular/router';
import { UserServiceService } from '../../shared/user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserServiceService) { }

  ngOnInit() {
  }

  onSubmit(username, password)
  {
    this.userService.userSignIn(username,password).subscribe((data:any)=>{
      console.log(data.json());
      localStorage.setItem('Authorization','Basic '+btoa(username+':'+password));
      console.log(localStorage.getItem('Authorization'));
      this.router.navigateByUrl('/userHome');
      //localStorage.setItem('Authorization', data.);
    });

    
}
}