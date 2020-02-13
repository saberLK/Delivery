import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { EnvironementService } from '../../services/environement.service';
import { Environement } from '../../model/model.environement';

@Component({
  selector: 'app-add-infoscnx',
  templateUrl: './add-infoscnx.component.html',
  styleUrls: ['./add-infoscnx.component.scss']
})
export class AddInfoscnxComponent implements OnInit {
private environementscnx:any[];
private environement = new Environement();
  constructor(private environementService:EnvironementService,private router:Router) { }

  ngOnInit() {
    this.environementService.getEnvironementcnx().subscribe(data=>{
      this.environementscnx = data;
    })
  }
  onSelect1(environement){
    this.environement = environement;
  }
  addInfoscnx(){
    this.environementService.setter(this.environement);
    console.log(this.environement.id_environement);
    this.router.navigate(["add-web"]);
  }

}
