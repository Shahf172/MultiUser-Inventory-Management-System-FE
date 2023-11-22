import { Component, OnInit } from '@angular/core';
import {Form, NgForm, NgModel} from '@angular/forms';
import { AdminservicService } from '../../../shared/adminservic.service';
//import { CustomerSystem } from '../../../shared/customer-system.model';
import { CustSystem } from '../sharedService/cust-system.model';


@Component({
  selector: 'app-assign-system',
  templateUrl: './assign-system.component.html',
  styleUrls: ['./assign-system.component.css']
})
export class AssignSystemComponent implements OnInit {

  customerSystem = {
    Id : null,
    customerAccess : '',
    customerId : null,
    systemId : null
  }


  constructor(private adminService: AdminservicService) { }

  ngOnInit() {
    this.adminService.getAdminSystems();
    this.adminService.getUsersList();
  }
onReset(form?: NgForm)
{
  form.reset();
  this.customerSystem={
    Id : null,
    customerAccess : '',
    customerId : null,
    systemId : null

  }
}


onSubmit(form: NgForm)
{
  this.adminService.postSystem(form.value).subscribe(data => {
    this.onReset(form);
  })
}
}
