import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss']
})
export class ListActivitiesComponent implements OnInit {
private activities:any[];

  constructor(private activityService:ActivityService,private router:Router) { }

  ngOnInit() {
    this.activityService.getAllActivities().subscribe(data=>{
      this.activities = data;
    })

  }
Delete(id){
  this.activityService.deleteActivity(id).subscribe(res =>{
    this.activities.splice(this.activities.indexOf(id),1)
    })
}
Update(activity){
  this.activityService.setter(activity);
  this.router.navigateByUrl("edit-activity");
}
}
