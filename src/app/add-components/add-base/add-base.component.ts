import { Component, OnInit } from '@angular/core';
import { Base } from '../../model/model.base';
import { Environement } from '../../model/model.environement';
import { EnvironementService } from '../../services/environement.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-base',
  templateUrl: './add-base.component.html',
  styleUrls: ['./add-base.component.scss']
})
export class AddBaseComponent implements OnInit {
  private base = new Base();
  private environement = new Environement();
    constructor(private environementService:EnvironementService,private router:Router) { }
  
    ngOnInit() {
     this.environement = this.environementService.getter();
     console.log(this.environement.id_environement);
    }
  addBase(base){
  this.environementService.addBasetoenv(base,this.environement.id_environement).subscribe();
  this.router.navigate(["add-appux"]);
  }
}
