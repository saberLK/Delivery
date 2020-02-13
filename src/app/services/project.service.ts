import { Injectable } from "@angular/core";
import { Http,Headers } from "@angular/http";
import { AppComponent } from "../app.component";
import { map } from "rxjs/operators";
import { Project } from "../model/model.project";

@Injectable()
export class ProjectService{

    private project = new Project();
    constructor(public http: Http) { }
    getProjectbyVersion(id){
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        return this.http.get(AppComponent.API_URL+"/projectsByVersion/"+id,{headers:headers})
        .pipe(map(resp => resp.json()));    
    }
    getAllprojectsname(){
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        return this.http.get(AppComponent.API_URL+"/projectsname",{headers:headers})
        .pipe(map(resp => resp.json()));    
    }
    getAllProject(){
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        return this.http.get(AppComponent.API_URL+"/projects",{headers:headers})
        .pipe(map(resp => resp.json()));  
    }
    getProjectsNull(){
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        return this.http.get(AppComponent.API_URL+"/projectsNull",{headers:headers})
        .pipe(map(resp => resp.json()));  
    }
addProject(project){
    let headers = new Headers();
    headers.append('Accept', 'application/json')
    return this.http.post(AppComponent.API_URL+"/project",project,{headers:headers})
    .pipe(map(resp => resp.json()));
}
    setter(project){
    this.project = project;
    }
    getter(){
        return this.project;
    }
    editProject(id,project){
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        return this.http.put(AppComponent.API_URL+"/project/"+id,project,{headers:headers})
        .pipe(map(resp => resp.json()));
    }
    deleteProject(id){
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        return this.http.delete(AppComponent.API_URL+"/project/"+id,{headers:headers})
        .pipe(map(resp => resp.json()));
    }
}