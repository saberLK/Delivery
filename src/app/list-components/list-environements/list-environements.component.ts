import { Component, OnInit } from '@angular/core';
import { EnvironementService } from '../../services/environement.service';
import { Router } from '../../../../node_modules/@angular/router';
import { InfosCnxService } from '../../services/infoscnx.service';

@Component({
  selector: 'app-list-environements',
  templateUrl: './list-environements.component.html',
  styleUrls: ['./list-environements.component.scss']
})
export class ListEnvironementsComponent implements OnInit {
private environements:any[];
  constructor(private infoscnxService:InfosCnxService,private environementService:EnvironementService,private router:Router) { }

  ngOnInit() {
    this.environementService.getAllEnvironement().subscribe(data=>{
      this.environements = data;
    })
  }
  Delete(id){
    this.environementService.deleteEnvironement(id).subscribe(res =>{
      this.environements.splice(this.environements.indexOf(id),1)
      })
  }
  Update(environement){
    this.environementService.setter(environement);
    this.router.navigate(["edit-environement"]);
  }
  editWeb(web){
    this.infoscnxService.setterWeb(web);
    console.log(web);
this.router.navigate(["edit-web"]);
  }
  editAppcs(appcs){
    this.infoscnxService.setterAppcs(appcs);
    this.router.navigate(["edit-appcs"]);
  }
  editAppux(appux){
    this.infoscnxService.setterAppux(appux);
    this.router.navigate(["edit-appux"]);
  }
  editBase(base){
    this.infoscnxService.setterBase(base);
    this.router.navigate(["edit-base"]);
  }
  editUnix(unix){
    this.infoscnxService.setterUnix(unix);
    this.router.navigate(["edit-unix"]);
  }
}
