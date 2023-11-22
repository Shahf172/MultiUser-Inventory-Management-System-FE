import { Component, OnInit } from '@angular/core';
import { AdminservicService } from '../../../shared/adminservic.service';


@Component({
  selector: 'app-systems-list',
  templateUrl: './systems-list.component.html',
  styleUrls: ['./systems-list.component.css']
})
export class SystemsListComponent implements OnInit {


  constructor(private adminService: AdminservicService) { }

  ngOnInit() {

    this.adminService.getAdminSystems();
  }

}
