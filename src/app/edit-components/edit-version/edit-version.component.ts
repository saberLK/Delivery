import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';
import { Version } from '../../model/model.version';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-version',
  templateUrl: './edit-version.component.html',
  styleUrls: ['./edit-version.component.scss']
})
export class EditVersionComponent implements OnInit {

  private version = new Version();
  constructor(private versionService:VersionService,private router:Router) { }

  ngOnInit() {
    this.version  = this.versionService.getter();
  }
  editVersion(version){
    this.versionService.editVersion(version.id_version,version).subscribe();
this.router.navigate(["list-versions"]);
  }
}
