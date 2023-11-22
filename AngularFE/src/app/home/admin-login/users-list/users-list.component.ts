import { Component, OnInit } from '@angular/core';
import { AdminservicService } from '../../../shared/adminservic.service';
import {UsersList} from '../../../shared/users-list.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private adminService: AdminservicService) { }

  ngOnInit() {

  this.adminService.getUsersList();
  }

}
