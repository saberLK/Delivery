import { Component, OnInit } from '@angular/core';
import { Unix } from '../../model/model.unix';
import { InfosCnxService } from '../../services/infoscnx.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-unix',
  templateUrl: './edit-unix.component.html',
  styleUrls: ['./edit-unix.component.scss']
})
export class EditUnixComponent implements OnInit {
  private unix = new Unix();
  constructor(private infoscnxService:InfosCnxService,private router:Router) { }

  ngOnInit() {
    this.unix = this.infoscnxService.getterUnix();
  }
editUnix(unix){
  this.infoscnxService.editUnix(unix.id_unix,unix).subscribe();
  this.router.navigateByUrl("list-environements");
}
}
