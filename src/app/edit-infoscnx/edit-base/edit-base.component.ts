import { Component, OnInit } from '@angular/core';
import { Base } from '../../model/model.base';
import { InfosCnxService } from '../../services/infoscnx.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-base',
  templateUrl: './edit-base.component.html',
  styleUrls: ['./edit-base.component.scss']
})
export class EditBaseComponent implements OnInit {
  private base = new Base();
  constructor(private infoscnxService:InfosCnxService,private router:Router) { }

  ngOnInit() {
    this.base = this.infoscnxService.getterBase();
  }
editBase(base){
  this.infoscnxService.editBase(base.id_base,base).subscribe();
  this.router.navigateByUrl("list-environements");
}
}
