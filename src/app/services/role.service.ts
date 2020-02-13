import { Injectable } from "@angular/core";

import { HttpClient } from "../../../node_modules/@angular/common/http";
import { AppComponent } from "../app.component";
import {  Http , Headers} from "@angular/http";
import { map } from "rxjs/operators";

@Injectable()
export class RoleService{
    constructor(private http: Http) {}

   getRoles(){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.get(AppComponent.API_URL+"/roles",{headers:headers})
    .pipe(map(resp => resp.json()));  
   }
  
}