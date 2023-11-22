import { Component, OnInit } from '@angular/core';
import { TajmacServiceService } from '../../../shared/tajmac-service.service';

@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.css']
})
export class AdminsListComponent implements OnInit {

  constructor(private tajmacService: TajmacServiceService) { }

  ngOnInit() {
    this.tajmacService.getAdminsList();
  }

}
