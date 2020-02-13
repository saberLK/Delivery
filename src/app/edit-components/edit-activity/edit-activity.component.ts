import { Component, OnInit } from '@angular/core';
import { Activity } from '../../model/model.activity';
import { ActivityService } from '../../services/activity.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.scss']
})
export class EditActivityComponent implements OnInit {
private activity = new Activity();
  constructor(private activityService:ActivityService,private router:Router) { }

  ngOnInit() {
    this.activity  = this.activityService.getter();
  }
  editActivity(activity){
    this.activityService.editActivity(activity.id,activity).subscribe();
this.router.navigateByUrl("list-activities");
  }
}
