import { Component, OnInit } from '@angular/core';
import { InfosCnxService } from '../../services/infoscnx.service';
import { Web } from '../../model/model.web';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-web',
  templateUrl: './edit-web.component.html',
  styleUrls: ['./edit-web.component.scss']
})
export class EditWebComponent implements OnInit {
private web = new Web();
  constructor(private infoscnxService:InfosCnxService,private router:Router) { }

  ngOnInit() {
    this.web = this.infoscnxService.getterWeb();
  }
editWeb(web){
  this.infoscnxService.editWeb(web.id_web,web).subscribe();
  this.router.navigateByUrl("list-environements");
}
}
