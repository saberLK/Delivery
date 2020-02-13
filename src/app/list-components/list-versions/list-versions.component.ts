import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-list-versions',
  templateUrl: './list-versions.component.html',
  styleUrls: ['./list-versions.component.scss']
})
export class ListVersionsComponent implements OnInit {

  private versions:any[];

  constructor(private versionService:VersionService,private router:Router) { }

  ngOnInit() {
    this.versionService.getAllVersion().subscribe(data=>{
      this.versions = data;
    })
  }
  Update(version){
    this.versionService.setter(version);
    this.router.navigate(["edit-version"]);
    }
    Delete(id){
    this.versionService.deleteVersion(id).subscribe(res =>{
      this.versions.splice(this.versions.indexOf(id),1)
      })
    }
}
