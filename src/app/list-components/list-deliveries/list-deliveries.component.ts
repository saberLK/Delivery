import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../../services/delivery.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Observable } from '../../../../node_modules/rxjs';
import { UploadService } from '../../services/upload.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-list-deliveries',
  templateUrl: './list-deliveries.component.html',
  styleUrls: ['./list-deliveries.component.scss']
})
export class ListDeliveriesComponent implements OnInit {
private deliveries:any[];

  constructor(private deliveryService:DeliveryService,private router:Router,private uploadService:UploadService) { }

  ngOnInit() {
    this.deliveryService.getAllDeliveries().subscribe(data=>{
      this.deliveries  =data;
    })

  }
Update(delivery){
this.deliveryService.setter(delivery);
this.router.navigate(["edit-delivery"]);
}
Delete(id){
this.deliveryService.deleteDelivery(id).subscribe(res =>{
  this.deliveries.splice(this.deliveries.indexOf(id),1)
  })
}

downloadFile(data: Response){
  var blob = new Blob([data], { type: 'text/csv' });
  var url= window.URL.createObjectURL(blob);
  window.open(url);
}
download(id){
  window.location.href='http://localhost:2860/downloadFile/'+id;
}
}
