import {AppComponent} from "../app.component";
import { Injectable } from '@angular/core';
import { Http,Headers } from "@angular/http";
import { map } from "rxjs/operators";
import { AppConsole } from "../model/model.appcs";
import { Unix } from "../model/model.unix";
import { Web } from "../model/model.web";
import { Base } from "../model/model.base";
import { AppUnix } from "../model/model.appux";

@Injectable()
export class InfosCnxService{
    private web = new Web();
    private appcs = new AppConsole();
    private appux = new AppUnix();
    private base = new Base();
    private unix = new Unix();
    constructor(public http: Http) { }


    getVersions(id){
      
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        return this.http.get(AppComponent.API_URL+"/version/"+id,{headers:headers})
        .pipe(map(resp => resp.json()));
    }
    getEnvironement(id:string,idd:string){
        
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        return this.http.get(`http://localhost:2860/environement/${id}/${idd}`,{headers:headers})
        .pipe(map(resp => resp.json()));
    }
    getWeb(id){
        let headers = new Headers();
        headers.append('Accept','application/json')
        return this.http.get(AppComponent.API_URL+"/web/"+id,{headers:headers})
        .pipe(map(resp=>resp.json()));
    }
    getBase(id){
        let headers = new Headers();
        headers.append('Accept','application/json')
        return this.http.get(AppComponent.API_URL+"/base/"+id,{headers:headers})
        .pipe(map(resp=>resp.json()));
    }
    getAppconsole(id){
        let headers = new Headers();
        headers.append('Accept','application/json')
        return this.http.get(AppComponent.API_URL+"/appcs/"+id,{headers:headers})
        .pipe(map(resp=>resp.json()));
    }
    getAppunix(id){
        let headers = new Headers();
        headers.append('Accept','application/json')
        return this.http.get(AppComponent.API_URL+"/appux/"+id,{headers:headers})
        .pipe(map(resp=>resp.json()));
    }
    getUnix(id){
        let headers = new Headers();
        headers.append('Accept','application/json')
        return this.http.get(AppComponent.API_URL+"/unix/"+id,{headers:headers})
        .pipe(map(resp=>resp.json()));
    }
    editWeb(id,web){
        let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.put(AppComponent.API_URL+"/web/"+id,web,{headers:headers})
    .pipe(map(resp => resp.json()));
    }
    editBase(id,base){
        let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.put(AppComponent.API_URL+"/base/"+id,base,{headers:headers})
    .pipe(map(resp => resp.json()));
    }
    editAppcs(id,appcs){
        let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.put(AppComponent.API_URL+"/appcs/"+id,appcs,{headers:headers})
    .pipe(map(resp => resp.json()));
    }
    editAppux(id,appux){
        let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.put(AppComponent.API_URL+"/appux/"+id,appux,{headers:headers})
    .pipe(map(resp => resp.json()));
    }
    editUnix(id,unix){
        let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.put(AppComponent.API_URL+"/environement/"+id,unix,{headers:headers})
    .pipe(map(resp => resp.json()));
    }
    getterWeb(){
return this.web;
    }
    setterWeb(web){
this.web = web;
    }

    getterBase(){
        return this.base;
    }
    setterBase(base){
        this.base=base;
    }

    getterAppcs(){
        return this.appcs;
    }
    setterAppcs(appcs){
        this.appcs = appcs;
    }

    getterAppux(){
        return this.appux;
    }
    setterAppux(appux){
        this.appux = appux;
    }

    getterUnix(){
        return this.unix;
    }
    setterUnix(unix){
        this.unix = unix;
    }
getAllweb(){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/webs",{headers:headers})
    .pipe(map(resp=>resp.json()));
}
getAllbase(){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/bases",{headers:headers})
    .pipe(map(resp=>resp.json()));
}
getAllunix(){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/unixs/",{headers:headers})
    .pipe(map(resp=>resp.json()));
}
getAllappcs(){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/appcss/",{headers:headers})
    .pipe(map(resp=>resp.json()));
}
getAllappux(){
    let headers = new Headers();
    headers.append('Accept','application/json')
    return this.http.get(AppComponent.API_URL+"/appuxs/",{headers:headers})
    .pipe(map(resp=>resp.json()));
}
    
}