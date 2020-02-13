import { Component, OnInit } from '@angular/core';
import { InfosCnxService } from '../services/infoscnx.service';
import { Router } from '@angular/router';
import { DeliveryService } from '../services/delivery.service';
import { VersionService } from '../services/version.service';
import { ProjectService } from '../services/project.service';
import { EnvironementService } from '../services/environement.service';
import { Web } from '../model/model.web';
import { AppConsole } from '../model/model.appcs';
import { AppUnix } from '../model/model.appux';
import { Unix } from '../model/model.unix';
import { Base } from '../model/model.base';


@Component({
  selector: 'app-infos-connections',
  templateUrl: './infos-connections.component.html',
  styleUrls: ['./infos-connections.component.scss']
})
export class InfosConnectionsComponent implements OnInit {
private web:any;
private appcs:any;
private appux:any;
private base:any;
private unix:any;

private environements:any[];
 private versions:any[];
 private projects:any[];
  constructor(public infosCnxService:InfosCnxService,private projectService:ProjectService,public deliveryService:DeliveryService,
    private versionService:VersionService,private environementService:EnvironementService,private router:Router) {

}
  ngOnInit() {
    this.versionService.getAllVersion().subscribe(data=>{
      this.versions = data;
    })
    
  }
onSelect1(id:Number){
  this.projectService.getProjectbyVersion(id).subscribe(data=>{
    this.projects = data;
  })
}
onSelect2(id:Number){
  this.environementService.getEnvironementbyproject(id).subscribe(data=>{
    this.environements = data;
  })
}
onSelect3(id:number){
this.environementService.getWebbyenv(id).subscribe(data=>{
  this.web  = data;
  console.log(this.web);  
})
this.environementService.getAppcsbyenv(id).subscribe(data=>{
  this.appcs  = data;
  console.log(this.appcs);  
})
this.environementService.getBasebyenv(id).subscribe(data=>{
  this.base  = data;
  console.log(this.base);  
})
this.environementService.getUnixbyenv(id).subscribe(data=>{
  this.unix  = data;
  console.log(this.unix);  
})
this.environementService.getAppuxbyenv(id).subscribe(data=>{
  this.appux  = data;
  console.log(this.appux);  
})
}
}
