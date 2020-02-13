import { Component, OnInit } from '@angular/core';
import { Milestone } from '../../model/model.milestones';
import { ActivityService } from '../../services/activity.service';
import { MilestoneService } from '../../services/milestone.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-milestone',
  templateUrl: './add-milestone.component.html',
  styleUrls: ['./add-milestone.component.scss']
})
export class AddMilestoneComponent implements OnInit {
private milestone = new Milestone();
private activitiesNull:any[];
  constructor(private activityService:ActivityService,private milestoneService:MilestoneService,
  private router:Router) { }

  ngOnInit() {
    this.activityService.getActivitiesNull().subscribe(data=>{
      this.activitiesNull=data;
    })
  }
addMilestone(milestone){
  this.milestoneService.addMilestone(milestone).subscribe();
  this.router.navigate(["list-milestones"]);
}
}
