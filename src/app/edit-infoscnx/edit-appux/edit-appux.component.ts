import { Component, OnInit } from '@angular/core';
import { AppUnix } from '../../model/model.appux';
import { InfosCnxService } from '../../services/infoscnx.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-appux',
  templateUrl: './edit-appux.component.html',
  styleUrls: ['./edit-appux.component.scss']
})
export class EditAppuxComponent implements OnInit {
  private appux = new AppUnix();
  constructor(private infoscnxService:InfosCnxService,private router:Router) { }

  ngOnInit() {
    this.appux = this.infoscnxService.getterAppux();
  }
editAppux(appux){
  this.infoscnxService.editAppux(appux.id_appunix,appux).subscribe();
  this.router.navigateByUrl("list-environements");
}
}
