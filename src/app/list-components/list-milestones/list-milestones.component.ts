import { Component, OnInit } from '@angular/core';
import { MilestoneService } from '../../services/milestone.service';
import { Router } from '../../../../node_modules/@angular/router';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-list-milestones',
  templateUrl: './list-milestones.component.html',
  styleUrls: ['./list-milestones.component.scss']
})
export class ListMilestonesComponent implements OnInit {
private milestones:any[];
  constructor(private activityService:ActivityService,private milestoneService:MilestoneService,private router:Router) { }

  ngOnInit() {
    this.milestoneService.getAllMilestone().subscribe(data=>{
      this.milestones=data;
    })
  }
  Delete(id){
    this.milestoneService.deleteMilestone(id).subscribe(res =>{
      this.milestones.splice(this.milestones.indexOf(id),1)
      })
  }
  Update(milestone){
    this.milestoneService.setter(milestone);
    this.router.navigate(["edit-milestone"]);
  }
  UpdateAct(activity){
    this.activityService.setter(activity);
    this.router.navigate(["edit-activity"]);
  }
  gotoactivity(activity){
    this.activityService.setter(activity);
    this.router.navigate(["list-activities"])
  }
}
