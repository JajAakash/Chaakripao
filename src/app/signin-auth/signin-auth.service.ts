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
    this.url =  'https://www.linkedin.com/uas/login?session_redirect=%2Foauth%2Fv2%2Flogin-success%3Fapp_id%3D11174525%26auth_type%3DAC%26flow%3D%257B%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522externalBindingKey%2522%253Anull%252C%2522loginHint%2522%253Anull%252C%2522codeChallenge%2522%253Anull%252C%2522codeChallengeMethod%2522%253Anull%252C%2522redirectUri%2522%253A%2522http%253A%252F%252Flocalhost%253A5000%252Fauth%252Flinkedin%252Fcallback%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522flowHint%2522%253Anull%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522appId%2522%253A11174525%252C%2522creationTime%2522%253A1582374915348%252C%2522state%2522%253A%2522SOME%2BSTATE%2522%252C%2522scope%2522%253A%2522r_emailaddress%2Br_liteprofile%2522%257D&fromSignIn=1&trk=oauth&cancel_redirect=%2Foauth%2Fv2%2Flogin-cancel%3Fapp_id%3D11174525%26auth_type%3DAC%26flow%3D%257B%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522externalBindingKey%2522%253Anull%252C%2522loginHint%2522%253Anull%252C%2522codeChallenge%2522%253Anull%252C%2522codeChallengeMethod%2522%253Anull%252C%2522redirectUri%2522%253A%2522http%253A%252F%252Flocalhost%253A5000%252Fauth%252Flinkedin%252Fcallback%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522flowHint%2522%253Anull%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522appId%2522%253A11174525%252C%2522creationTime%2522%253A1582374915348%252C%2522state%2522%253A%2522SOME%2BSTATE%2522%252C%2522scope%2522%253A%2522r_emailaddress%2Br_liteprofile%2522%257D';
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
