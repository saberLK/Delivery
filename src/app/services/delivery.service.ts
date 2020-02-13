import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import { AppComponent } from "../app.component";
import { map } from "rxjs/operators";
import { Delivery } from "../model/model.delivery";

@Injectable()
export class DeliveryService{
    private delivery = new Delivery();
    constructor(public http: Http) { }
 getDelivery(id){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.get(AppComponent.API_URL+"/delivery/"+id,{headers:headers})
    .pipe(map(resp => resp.json()));
}
getnbrdelivery(){
    let headers=  new Headers();
    headers.append('Accept', 'application/json')
    return this.http.get(AppComponent.API_URL+"/nbrdel",{headers:headers})
    .pipe(map(resp => resp.json()));
}
getlinegraph(anne){
    let headers=  new Headers();
    headers.append('Accept', 'application/json');
    
    return this.http.get(AppComponent.API_URL+"/line/"+anne,{headers:headers})
    .pipe(map(resp => resp.json()));
    
}
getAllDeliveries(){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.get(AppComponent.API_URL+"/deliveries",{headers:headers})
    .pipe(map(resp => resp.json()));
}
getDeliveriesNull(){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.get(AppComponent.API_URL+"/deliveriesNull",{headers:headers})
    .pipe(map(resp => resp.json()));
}
getPole(){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/pole",{headers:headers})
    .pipe(map(resp=>resp.json()));
}
addDelivery(delivery){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.post(AppComponent.API_URL+"/delivery",delivery,{headers:headers})
    .pipe(map(resp => resp.json()));
}
deleteDelivery(id){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.delete(AppComponent.API_URL+"/delivery/"+id,{headers:headers})
    .pipe(map(resp => resp.json()));
}
editDelivery(id,delivery){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.put(AppComponent.API_URL+"/delivery/"+id,delivery,{headers:headers})
    .pipe(map(resp => resp.json()));
}
setter(delivery){
this.delivery = delivery;
}
getter(){
    return this.delivery;
}
piegraphapi(){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/graph1",{headers:headers})
    .pipe(map(resp=>resp.json()));
}
bargraphapi(){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/graphbar",{headers:headers})
    .pipe(map(resp=>resp.json()));
}

getdeliveriesbyproject(id:number){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/delperpro/"+id,{headers:headers})
    .pipe(map(resp=>resp.json()));
}
}