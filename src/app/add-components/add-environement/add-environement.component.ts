import { Component, OnInit } from '@angular/core';
import { Environement } from '../../model/model.environement';
import { EnvironementService } from '../../services/environement.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-environement',
  templateUrl: './add-environement.component.html',
  styleUrls: ['./add-environement.component.scss']
})
export class AddEnvironementComponent implements OnInit {
private environement = new Environement();
  constructor(private environementService:EnvironementService,private router:Router) { }

  ngOnInit() {
  }
  addEnvironement(environement){
    this.environementService.addEnvironement(environement).subscribe();
this.router.navigate(["list-environements"]);
  }
}
