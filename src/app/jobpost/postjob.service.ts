import { Injectable } from '@angular/core';
import { Jobdata } from './jobdata';
import { InformationService } from '../information.service';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostjobService {

  constructor(private informationService:InformationService,private _http:HttpClient) { }

  postJobs(data:Jobdata):Observable<any>{
    return this._http.post(this.informationService.postJobUrl,data)
    

  }
}
