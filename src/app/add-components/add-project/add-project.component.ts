import { Component, OnInit } from '@angular/core';
import { EnvironementService } from '../../services/environement.service';
import { DeliveryService } from '../../services/delivery.service';
import { ProjectService } from '../../services/project.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Project } from '../../model/model.project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
private environementNull:any[];
private deliveriesNull:any[];
private project = new Project();
  constructor(private router:Router,
    private environementService:EnvironementService,private deliveryService:DeliveryService,private projectService:ProjectService) { }
  ngOnInit() {
    this.environementService.getEnvironementsNull().subscribe(data=>{
      this.environementNull=data;
    })
    this.deliveryService.getDeliveriesNull().subscribe(data=>{
      this.deliveriesNull=data;
    })
  }
addProject(project){
  this.projectService.addProject(project).subscribe();
  this.router.navigate(["list-projects"]);
}
}
