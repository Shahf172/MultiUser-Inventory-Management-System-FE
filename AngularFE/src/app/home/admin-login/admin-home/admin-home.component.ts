import { Component, OnInit } from '@angular/core';
import { TajmacServiceService } from '../../../shared/tajmac-service.service';
import { AdminservicService } from '../../../shared/adminservic.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private tajmacService: TajmacServiceService, private adminService: AdminservicService) { }

  ngOnInit() {

    this.adminService.getAdminDetails();
    
  }

}
