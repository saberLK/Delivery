import { Component, OnInit } from '@angular/core';
import { Unix } from '../../model/model.unix';
import { Environement } from '../../model/model.environement';
import { EnvironementService } from '../../services/environement.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-unix',
  templateUrl: './add-unix.component.html',
  styleUrls: ['./add-unix.component.scss']
})
export class AddUnixComponent implements OnInit {

  private unix = new Unix();
  private environement = new Environement();
    constructor(private environementService:EnvironementService,private router:Router) { }
  
    ngOnInit() {
     this.environement = this.environementService.getter();
     console.log(this.environement.id_environement);
    }
  addUnix(unix){
  this.environementService.addUnixtoenv(unix,this.environement.id_environement).subscribe();
  this.router.navigate(["add-base"]);
  }

}
