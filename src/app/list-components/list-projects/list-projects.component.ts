import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router } from '../../../../node_modules/@angular/router';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {
private projects:any[];

  constructor(private deliveryService:DeliveryService,private projectService:ProjectService,private router:Router) { }

  ngOnInit() {
    this.projectService.getAllProject().subscribe(data=>{
      this.projects = data;
    })
  }
  Update(project){
    this.projectService.setter(project);
    this.router.navigate(["edit-project"]);
    }
    Delete(id){
    this.projectService.deleteProject(id).subscribe(res =>{
      this.projects.splice(this.projects.indexOf(id),1)
      })
    }
    UpdateDel(delivery){
this.deliveryService.setter(delivery);
this.router.navigate(["edit-delivery"]);
    }

}
