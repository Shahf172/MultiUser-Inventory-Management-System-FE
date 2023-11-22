import { Component, OnInit } from '@angular/core';
import { TajmacServiceService } from '../../../shared/tajmac-service.service';

@Component({
  selector: 'app-sys-assign',
  templateUrl: './sys-assign.component.html',
  styleUrls: ['./sys-assign.component.css']
})
export class SysAssignComponent implements OnInit {


  sysAssign = {
    Id : null,
    adminId : null,
    sysId : null
  }

  constructor(private tajmacService : TajmacServiceService) { }

  ngOnInit() {

    this.tajmacService.getAdminsList();
    this.tajmacService.getSystemsList();

  }

}
