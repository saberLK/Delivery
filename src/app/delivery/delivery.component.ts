import { Component, OnInit} from '@angular/core';

import { DeliveryService } from '../services/delivery.service';
import { Router, NavigationExtras } from '@angular/router';
import { InfosCnxService } from '../services/infoscnx.service';
import { ActivityService } from '../services/activity.service';
import { MilestoneService } from '../services/milestone.service';
import { VersionService } from '../services/version.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
  private versions:any[];
  private projects:any[];
  private deliveries:any[];
  private activity:any;
constructor(private router:Router,private activityService:ActivityService,private versionService:VersionService,private projectService:ProjectService,private deliveryService:DeliveryService){}

  ngOnInit() {
    this.versionService.getAllVersion().subscribe(data=>{
      this.versions  = data;
    })
    this.deliveryService.getAllDeliveries().subscribe(data=>{
      this.deliveries = data;
    })
  }
onSelect1(id:number){
  this.projectService.getProjectbyVersion(id).subscribe(data=>{
    this.projects =  data;
  })
}
onSelect2(id:number){
this.deliveryService.getdeliveriesbyproject(id).subscribe(data=>{
  this.deliveries = data;
})
}
gotoactivitiespage(activity){
this.activityService.setter(activity);
this.router.navigate(["list-activities"]);
}
}
