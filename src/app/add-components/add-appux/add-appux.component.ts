import { Component, OnInit } from '@angular/core';
import { AppUnix } from '../../model/model.appux';
import { Environement } from '../../model/model.environement';
import { EnvironementService } from '../../services/environement.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-appux',
  templateUrl: './add-appux.component.html',
  styleUrls: ['./add-appux.component.scss']
})
export class AddAppuxComponent implements OnInit {

  private appux = new AppUnix();
  private environement = new Environement();
    constructor(private environementService:EnvironementService,private router:Router) { }
  
    ngOnInit() {
     this.environement = this.environementService.getter();
     console.log(this.environement.id_environement);
    }
  addAppux(appux){
  this.environementService.addAppuxtoenv(appux,this.environement.id_environement).subscribe();
  this.router.navigate(["add-appcs"]);
  }
}
