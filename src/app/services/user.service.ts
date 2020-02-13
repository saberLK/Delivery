import {AppComponent} from "../app.component";
import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {User} from "../model/model.user";
import { map } from "rxjs/operators";

@Injectable()
export class UserService{
private user = new User();
      

    constructor(public http: Http) { }
    getUser(){
        return this.http.get(AppComponent.API_URL+"/account/users")
        .pipe(map(resp => resp.json()));
     
    }
deleteUser(id){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
return this.http.delete(AppComponent.API_URL+"/account/users/"+id,{headers:headers})
.pipe(map(resp =>resp.json()   ));
}
updateUser(user){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
return this.http.post(AppComponent.API_URL+"/account/users",user,{headers: headers})
.pipe(map(resp =>resp.json()   ));
}
setter(user:User){
    this.user=user;
}
getter(){
    return this.user;
}
}