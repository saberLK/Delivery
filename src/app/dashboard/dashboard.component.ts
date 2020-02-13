import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../services/delivery.service';
import { Delivery } from '../model/model.delivery';
import { Key } from '../../../node_modules/protractor';
import { ProjectService } from '../services/project.service';
import { Project } from '../model/model.project';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { formatDate } from '@telerik/kendo-intl';

interface Model {
  KEY: String;
  VAL: Number;
}
interface Model2{
  KEY: String;
  VAL: Number;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
// private seriesData:maphelp = new maphelp();
public seriesData: Model[] = [];
public seriesData2:any[]=[];
public nbrdel:any;
public project:String[];
public projects:Project[];
public anne:any[]=[2015,2016,2017,2018];
private categories: any[] = [];
private tata:any;
private name:any;
private series:any[]=[];
private tempo:any;
private ints:any[];
private i=0;
private seriesData3:Model[]=[];
private selectedvalue=new Date().getUTCFullYear();
  constructor(private deliveryService:DeliveryService,private projectService:ProjectService) { }

  onSelect(anne){
 
    this.seriesData3.length = 0;
    this.categories.length = 0;

    this.categories.push("January","February","March","April","May", "June","July","August","September","October","November","December");


    this.deliveryService.getlinegraph(anne).subscribe(data=>{
      Object.keys(data).forEach(key=>{
        this.seriesData3.push({KEY:key,VAL:data[key]});
        
                                        })
                                                                })
          this.deliveryService.bargraphapi().subscribe(data=>{
            this.seriesData2 = data;
          
    })
  }

  ngOnInit() {
    console.log(this.selectedvalue);
    this.categories.push("January","February","March","April","May", "June","July","August","September","October","November","December");


    this.deliveryService.getlinegraph(2018).subscribe(data=>{
      Object.keys(data).forEach(key=>{
        this.seriesData3.push({KEY:key,VAL:data[key]});
        
                                        })
                                                                })
          this.deliveryService.bargraphapi().subscribe(data=>{
            this.seriesData2 = data;
          
    })
    this.deliveryService.getnbrdelivery().subscribe(data=>{
      this.nbrdel  = data;
    

    })
  
    this.projectService.getAllprojectsname().subscribe(data=>{

    this.project=data;


    })


// this.deliveryService.getlinegraph()
    this.deliveryService.piegraphapi().subscribe(data=>{
Object.keys(data).forEach(key=>{
this.seriesData.push({KEY:key,VAL:(data[key]).length});

                                })
                                                        })
  this.deliveryService.bargraphapi().subscribe(data=>{
    this.seriesData2 = data;
  })
console.log(this.nbrdel);
             }

convert(value){
  return (value/this.nbrdel)*100;
}
}
