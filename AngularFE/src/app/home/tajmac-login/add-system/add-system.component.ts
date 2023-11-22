import { Component, OnInit } from '@angular/core';
import { CustomersAdmin } from '../../../shared/customers-admin.model';
import {NgForm} from '@angular/forms';
//import { Admin } from './admin.model';
import { Injectable, Type } from '@angular/core';
import {Form, NgModel} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Response,RequestOptions, Headers, HttpModule, Http,URLSearchParams, RequestMethod} from '@angular/http';
import {platformBrowser} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-add-system',
  templateUrl: './add-system.component.html',
  styleUrls: ['./add-system.component.css']
})
export class AddSystemComponent implements OnInit {

  system = {
    Id : null,
    partType : null,
    serial : null,
    qrCode : "",
    qrImage : "",
    pcNo : null,
    dc_3v : null,
    dc_5v : null,
    dc_12v : null,
    dc12v : null,
    C_12v : null,
    SVSB : "",
    PG : "",
    service : "",
    expressCode : "",
    mfgDate : "",
    model : "",
    noOfCpus : "",
    codeName : "",
    cache1_1 : "",
    cache1_2 : "",
    bootStages : "",
    moboModel : "",
    moboChipset : "",
    biosVersion : "",
    diskModel : "",
    capacity : "",
    diskSerial : "",
    damageBlock : "",
    maxTemp : "",
    testedSpeed : "",
    timeSpent : "",
    tRateMin : "",
    tRateMax : "",
    tRateAvg : "",
    accessTime : "",
    burstRate : "",
    cpuUsage : "",
    diskwipe : "",
    winMemDiag : "",
    dimm1PartNo : "",
    dimm1SerialNo : "",
    dimm2PartNo : "",
    dimm2serialNo : "",
    dimm3PartNo : "",
    dimm3SerialNo : "",
    dimm4PartNo : "",
    dimm4SerialNo : "",
    modelNo : "",
    productId : "",
    serialNo : "",
    mfg : "",
    winReqId : null,
    winCoaId : null,
    winProduct : "",
    winXCoaId : null,
    winLicType : "",
    winProdKey : "",
    offReqId : null,
    offCoaId : null,
    offProd : "",
    offXCoaId : null,
    offLicType : "",
    offProdKey : "",
  }


  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit()
  {
    var data = JSON.stringify(this.system);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Authorization', localStorage.getItem('Authorization'));
    let req = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this.http.post('http://localhost:50555/api/systemsDetails', this.system, req).map(x => x.json()).subscribe(data =>{
      console.log(data);  
    });
  }

}
