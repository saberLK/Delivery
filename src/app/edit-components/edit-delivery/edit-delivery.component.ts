import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../../services/delivery.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Delivery } from '../../model/model.delivery';
import { UploadService } from '../../services/upload.service';
import { HttpResponse, HttpEventType } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.component.html',
  styleUrls: ['./edit-delivery.component.scss']
})
export class EditDeliveryComponent implements OnInit {
private delivery = new Delivery();
selectedFiles: FileList
currentFileUpload: File
progress: { percentage: number } = { percentage: 0 }
  constructor(private deliveryService:DeliveryService,private router:Router,private uploadService:UploadService) { }

  ngOnInit() {
this.delivery = this.deliveryService.getter();
  }
  editDelivery(delivery){
    this.deliveryService.editDelivery(delivery.id_delivery,delivery).subscribe();
this.router.navigate(["list-deliveries"]);
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
 
  upload(id) {
    this.progress.percentage = 0;
 
    this.currentFileUpload = this.selectedFiles.item(0)
    this.uploadService.pushFileToStorage(id,this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    })
 
    this.selectedFiles = undefined
  } 
}
