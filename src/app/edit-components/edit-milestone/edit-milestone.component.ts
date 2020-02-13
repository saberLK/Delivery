import { Component, OnInit } from '@angular/core';
import { Milestone } from '../../model/model.milestones';
import { MilestoneService } from '../../services/milestone.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-milestone',
  templateUrl: './edit-milestone.component.html',
  styleUrls: ['./edit-milestone.component.scss']
})
export class EditMilestoneComponent implements OnInit {
  private milestone = new Milestone();
  constructor(private milestoneService:MilestoneService,private router:Router) { }

  ngOnInit() {
    this.milestone  = this.milestoneService.getter();
  }
  editMilestone(milestone){
    this.milestoneService.editMilestone(milestone.id_milestone,milestone).subscribe();
this.router.navigate(["list-milestones"]);
  }

}
