import { Component, OnInit } from '@angular/core';
import { Activity } from '../../model/model.activity';
import { ActivityService } from '../../services/activity.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {
private activity  = new Activity();
  constructor(private activityService:ActivityService,private router:Router) { }

  ngOnInit() {

  }
addActivity(activity){
  this.activityService.addActivity(activity).subscribe();
  this.router.navigateByUrl("list-activities");
}
}
