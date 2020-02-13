import { Injectable } from "@angular/core";
import { Http,Headers } from "@angular/http";
import { AppComponent } from "../app.component";
import { map } from "rxjs/operators";

import { Version } from "../model/model.version";

@Injectable()
export class VersionService{

    private version = new Version();
    constructor(public http: Http) { }

    getAllVersion(){
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        return this.http.get(AppComponent.API_URL+"/versions",{headers:headers})
        .pipe(map(resp => resp.json()));  
    }

addVersion(version){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.post(AppComponent.API_URL+"/version",version,{headers:headers})
    .pipe(map(resp => resp.json()));
}
    setter(version){
    this.version = version;
    }
    getter(){
        return this.version;
    }
    editVersion(id,version){
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        return this.http.put(AppComponent.API_URL+"/version/"+id,version,{headers:headers})
        .pipe(map(resp => resp.json()));
    }
    deleteVersion(id){
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        return this.http.delete(AppComponent.API_URL+"/version/"+id,{headers:headers})
        .pipe(map(resp => resp.json()));
    }
}