import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-delivery-settings',
  templateUrl: './delivery-settings.component.html',
  styleUrls: ['./delivery-settings.component.scss']
})
export class DeliverySettingsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoaddactivity(){
this.router.navigateByUrl("add-activity");
  }
  gotoaddmilestone(){
    this.router.navigateByUrl("add-milestone");
  }
  gotoadddelivery(){
    this.router.navigateByUrl("add-delivery");
  }
  gotoaddenvironement(){
    this.router.navigateByUrl("add-environement");
  }
  gotoaddproject(){
    this.router.navigateByUrl("add-project");
  }
  gotoaddversion(){
    this.router.navigateByUrl("add-version");
  }
  gotolistactivity(){
    this.router.navigateByUrl("list-activities");
  }
  gotolistmilestone(){
    this.router.navigateByUrl("list-milestones");
  }
  gotolistdelivery(){
    this.router.navigateByUrl("list-deliveries");
  }
  gotolistproject(){
    this.router.navigateByUrl("list-projects");
  }
  gotolistversion(){
    this.router.navigateByUrl("list-versions");
  }
  gotolistenvironement(){
    this.router.navigateByUrl("list-environements");
  }
  gotoaddinfoscnx(){
    this.router.navigateByUrl("add-infoscnx");
  }
}
