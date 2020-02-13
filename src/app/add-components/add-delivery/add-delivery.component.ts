import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Delivery } from '../../model/model.delivery';
import { DeliveryService } from '../../services/delivery.service';
import { EnvironementService } from '../../services/environement.service';
import { MilestoneService } from '../../services/milestone.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Http, RequestOptions } from '../../../../node_modules/@angular/http';
import { UploadService } from '../../services/upload.service';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.scss']
})
export class AddDeliveryComponent implements OnInit{
private delivery = new Delivery();
private target_environements:any[];
private milestones:any[];

  constructor(private http: Http,private deliveryService:DeliveryService,private environementService:EnvironementService,
  private milestoneService:MilestoneService,private router:Router,private uploadService:UploadService,private httpc:HttpClient) { }


  ngOnInit() {
    
this.environementService.getAllEnvironement().subscribe(data=>{
  this.target_environements  =  data;
  console.log(data);
})
this.milestoneService.getMilestonesNull().subscribe(data=>{
  this.milestones = data;
})
  }
  addDelivery(delivery){

    this.deliveryService.addDelivery(delivery).subscribe();

this.router.navigate(["list-deliveries"]);
  }

  

 

}
