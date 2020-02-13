import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { ProjectService } from '../../services/project.service';
import { VersionService } from '../../services/version.service';
import { Version } from '../../model/model.version';

@Component({
  selector: 'app-add-version',
  templateUrl: './add-version.component.html',
  styleUrls: ['./add-version.component.scss']
})
export class AddVersionComponent implements OnInit {
private version = new Version();
  private projectsNull:any[];
    constructor(private router:Router
      ,private projectService:ProjectService,private versionService:VersionService) { }
    ngOnInit() {
      this.projectService.getProjectsNull().subscribe(data=>{
        this.projectsNull=data;
      })
   
    }
  addVersion(version){
    this.versionService.addVersion(version).subscribe();
    this.router.navigate(["list-versions"]);
  }
}
