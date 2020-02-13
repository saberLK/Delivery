import { Component, OnInit } from '@angular/core';
import { AppConsole } from '../../model/model.appcs';
import { InfosCnxService } from '../../services/infoscnx.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-appcs',
  templateUrl: './edit-appcs.component.html',
  styleUrls: ['./edit-appcs.component.scss']
})
export class EditAppcsComponent implements OnInit {
  private appcs = new AppConsole();
  constructor(private infoscnxService:InfosCnxService,private router:Router) { }

  ngOnInit() {
    this.appcs = this.infoscnxService.getterAppcs();
  }
editAppcs(appcs){
  this.infoscnxService.editAppux(appcs.id_appconsole,appcs).subscribe();
  this.router.navigateByUrl("list-environements");
}
}
