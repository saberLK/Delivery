import { Component, OnInit } from '@angular/core';
import { Web } from '../../model/model.web';
import { Router } from '../../../../node_modules/@angular/router';
import { Environement } from '../../model/model.environement';
import { EnvironementService } from '../../services/environement.service';

@Component({
  selector: 'app-add-web',
  templateUrl: './add-web.component.html',
  styleUrls: ['./add-web.component.scss']
})
export class AddWebComponent implements OnInit {
private web = new Web();
private environement = new Environement();
  constructor(private environementService:EnvironementService,private router:Router) { }

  ngOnInit() {
   this.environement = this.environementService.getter();
   console.log(this.environement.id_environement);
  }
addWeb(web){

this.environementService.addWebtoenv(web,this.environement.id_environement).subscribe();
this.router.navigate(["add-unix"]);
}
}
