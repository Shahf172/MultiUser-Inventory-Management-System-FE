import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../shared/user-service.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private userService : UserServiceService) { }

  ngOnInit() {

    this.userService.getUserDetails();
    this.userService.getUserSys();
  }

}
