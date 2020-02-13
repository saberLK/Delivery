import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/model.project';
import { ProjectService } from '../../services/project.service';
import { Router } from '../../../../node_modules/@angular/router';
import { DeliveryService } from '../../services/delivery.service';
import { EnvironementService } from '../../services/environement.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  private project = new Project();
  private deliveriesNull:any[];
  private environementsNull:any[];
  constructor(private environementService:EnvironementService,private deliveryService:DeliveryService,private projectService:ProjectService,private router:Router) { }

  ngOnInit() {
    this.project  = this.projectService.getter();
   this.deliveryService.getDeliveriesNull().subscribe(data=>{
    this.deliveriesNull =data;
    })
    this.environementService.getEnvironementsNull().subscribe(data=>{
      this.environementsNull = data;
    })
  }
  editProject(project){
    this.projectService.editProject(project.id_project,project).subscribe();
this.router.navigate(["list-projects"]);
  }

}
