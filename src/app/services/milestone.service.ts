import { Injectable } from "@angular/core";
import { Http,Headers } from "@angular/http";
import { AppComponent } from "../app.component";
import { map } from "rxjs/operators";
import { Milestone } from "../model/model.milestones";

@Injectable()
export class MilestoneService{

    private milestone = new Milestone();
    constructor(public http: Http) { }

    getAllMilestone(){
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        return this.http.get(AppComponent.API_URL+"/milestones",{headers:headers})
        .pipe(map(resp => resp.json()));  
    }
    getMilestonesNull(){
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        return this.http.get(AppComponent.API_URL+"/milestonesNull",{headers:headers})
        .pipe(map(resp => resp.json()));  
    }
addMilestone(milestone){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.post(AppComponent.API_URL+"/milestone",milestone,{headers:headers})
    .pipe(map(resp => resp.json()));
}
    setter(milestone){
    this.milestone = milestone;
    }
    getter(){
        return this.milestone;
    }
    editMilestone(id,milestone){
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        return this.http.put(AppComponent.API_URL+"/milestone/"+id,milestone,{headers:headers})
        .pipe(map(resp => resp.json()));
    }
    deleteMilestone(id){
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        return this.http.delete(AppComponent.API_URL+"/milestone/"+id,{headers:headers})
        .pipe(map(resp => resp.json()));
    }
}