import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { InformationService } from '../information.service';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninAuthService {

  constructor(private _http:HttpClient,private inforService:InformationService, private router:Router) { }

  url;

  loginresponse(responce):Observable<any>{
    //this.url =  'http://localhost:5000/auth/login/';
    this.url=this.inforService.googleLogin;
    return this._http.post(this.url,responce);
  }

  linkedinloginresponse():Observable<any>{
    this.url =  'https://naukrichakri.herokuapp.com/auth/linkedin';
    //this.url='http://localhost:5000/auth/linkedin/';
    return this._http.get(this.url);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate['/jobs']
  }

  gettoken(){
    return localStorage.getItem('token')
  }
  
  
}
