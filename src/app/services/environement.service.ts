import { Injectable } from "@angular/core";
import { Http,Headers } from "@angular/http";
import { AppComponent } from "../app.component";
import { map } from "rxjs/operators";
import { Environement } from "../model/model.environement";

@Injectable()
export class EnvironementService{
    private environement = new Environement();
    constructor(public http: Http) { }
getAllEnvironement(){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/environements",{headers:headers})
    .pipe(map(resp=>resp.json()));
}
getEnvironementById(id){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/environement/"+id,{headers:headers})
    .pipe(map(resp=>resp.json()));
}
getEnvironementcnx(){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/environementscnx",{headers:headers})
    .pipe(map(resp=>resp.json()));
}
getEnvironementbyproject(id){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/environementsByProject/"+id,{headers:headers})
    .pipe(map(resp=>resp.json()));
}
getEnvironementsNull(){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.get(AppComponent.API_URL+"/environementsNull",{headers:headers})
    .pipe(map(resp => resp.json()));
}
addEnvironement(environement){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.post(AppComponent.API_URL+"/environement",environement,{headers:headers})
    .pipe(map(resp=>resp.json()));
}
deleteEnvironement(id){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.delete(AppComponent.API_URL+"/environement/"+id,{headers:headers})
    .pipe(map(resp=>resp.json()));
}
editEnvironement(id,environement){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.put(AppComponent.API_URL+"/environement/"+id,environement,{headers:headers})
    .pipe(map(resp => resp.json()));
}
getter(){
return this.environement;
}
setter(environement){
this.environement = environement;
}

addWebtoenv(web,id){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.put(AppComponent.API_URL+"/environementweb/"+id,web,{headers:headers})
    .pipe(map(resp => resp.json()));
}
addUnixtoenv(unix,id){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.put(AppComponent.API_URL+"/environementunix/"+id,unix,{headers:headers})
    .pipe(map(resp => resp.json()));
}
addBasetoenv(base,id){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.put(AppComponent.API_URL+"/environementbase/"+id,base,{headers:headers})
    .pipe(map(resp => resp.json()));
}
addAppcstoenv(appcs,id){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.put(AppComponent.API_URL+"/environementappcs/"+id,appcs,{headers:headers})
    .pipe(map(resp => resp.json()));
}
addAppuxtoenv(appux,id){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.put(AppComponent.API_URL+"/environementappux/"+id,appux,{headers:headers})
    .pipe(map(resp => resp.json()));
}
getWebbyenv(id){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/webenv/"+id,{headers:headers})
    .pipe(map(resp=>resp.json())); 
}
getBasebyenv(id){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/baseenv/"+id,{headers:headers})
    .pipe(map(resp=>resp.json())); 
}
getUnixbyenv(id){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/unixenv/"+id,{headers:headers})
    .pipe(map(resp=>resp.json())); 
}
getAppcsbyenv(id){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/appcsenv/"+id,{headers:headers})
    .pipe(map(resp=>resp.json())); 
}
getAppuxbyenv(id){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/appuxenv/"+id,{headers:headers})
    .pipe(map(resp=>resp.json())); 
}
}