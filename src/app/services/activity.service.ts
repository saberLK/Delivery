import { Injectable } from "@angular/core";
import { Http,Headers } from "@angular/http";
import { AppComponent } from "../app.component";
import { map } from "rxjs/operators";
import { Activity } from "../model/model.activity";
import { Observable } from "../../../node_modules/rxjs/Observable";

@Injectable()
export class ActivityService{
private activity = new  Activity();
    constructor(public http: Http) { }
    getAllActivities(){
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        return this.http.get(AppComponent.API_URL+"/activities",{headers:headers})
        .pipe(map(resp => resp.json()));
    }

    getActivitiesNull(){
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        return this.http.get(AppComponent.API_URL+"/activitiesNull",{headers:headers})
        .pipe(map(resp => resp.json()));
    }
addActivity(activity){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.post(AppComponent.API_URL+"/activity",activity,{headers:headers})
    .pipe(map(resp => resp.json()));
}
editActivity(id,activity){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.put(AppComponent.API_URL+"/activity/"+id,activity,{headers:headers})
    .pipe(map(resp => resp.json()));
}
deleteActivity(id){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.delete(AppComponent.API_URL+"/activity/"+id,{headers:headers})
    .pipe(map(resp => resp.json()));
}
setter(activity){
this.activity = activity;
}
getter(){
    return this.activity;
}
}