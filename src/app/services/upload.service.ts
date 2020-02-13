import { Injectable } from "@angular/core";

import { HttpClient, HttpEvent, HttpRequest } from "../../../node_modules/@angular/common/http";
import { Observable } from "../../../node_modules/rxjs";
import { Http, Headers,RequestOptions } from "../../../node_modules/@angular/http";

@Injectable()
export class UploadService{
    constructor(private http: HttpClient) {}

    pushFileToStorage(id,file: File): Observable<HttpEvent<{}>> {
        const formdata: FormData = new FormData();
     
        formdata.append('file', file);
     
        const req = new HttpRequest('POST', "http://localhost:2860/uploadFile/"+id, formdata, {
          reportProgress: true,
          responseType: 'text'
        });
     
        return this.http.request(req);
      }
     
      getFiles(id): Observable<any> {
        
        return this.http.get('http://localhost:2860/downloadFile/'+id);

      }
  
}