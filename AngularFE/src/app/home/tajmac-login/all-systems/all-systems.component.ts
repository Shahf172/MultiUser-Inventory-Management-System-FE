import { Component, OnInit } from '@angular/core';
import { TajmacServiceService } from '../../../shared/tajmac-service.service';

@Component({
  selector: 'app-all-systems',
  templateUrl: './all-systems.component.html',
  styleUrls: ['./all-systems.component.css']
})
export class AllSystemsComponent implements OnInit {

  constructor(private tajmacService: TajmacServiceService) { }

  ngOnInit() {
    this.tajmacService.getSystemsList();
  }

}
