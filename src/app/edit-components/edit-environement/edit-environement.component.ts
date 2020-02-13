import { Component, OnInit } from '@angular/core';
import { Environement } from '../../model/model.environement';
import { EnvironementService } from '../../services/environement.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-environement',
  templateUrl: './edit-environement.component.html',
  styleUrls: ['./edit-environement.component.scss']
})
export class EditEnvironementComponent implements OnInit {
private environement = new Environement();
  constructor(private environementService:EnvironementService,private router:Router) { }

  ngOnInit() {
    this.environement = this.environementService.getter();
  }
  editEnvironement(environement){
    this.environementService.editEnvironement(environement.id_environement,environement).subscribe();
    this.router.navigate(["list-environements"]);
  }
}
