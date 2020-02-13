import { Component, OnInit } from '@angular/core';
import { AppConsole } from '../../model/model.appcs';
import { Environement } from '../../model/model.environement';
import { EnvironementService } from '../../services/environement.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-appcs',
  templateUrl: './add-appcs.component.html',
  styleUrls: ['./add-appcs.component.scss']
})
export class AddAppcsComponent implements OnInit {

  private appcs = new AppConsole();
  private environement = new Environement();
    constructor(private environementService:EnvironementService,private router:Router) { }
  
    ngOnInit() {
     this.environement = this.environementService.getter();
     console.log(this.environement.id_environement);
    }
  addAppcs(appcs){
  this.environementService.addAppcstoenv(appcs,this.environement.id_environement).subscribe();
  this.router.navigate(["list-environements"]);
  }
}
