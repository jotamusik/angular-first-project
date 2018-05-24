import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {User} from '../model/user';
import { Observable } from 'rxjs';
import 'rxjs-compat/add/operator/do';
import 'rxjs-compat/add/operator/shareReplay';

@Injectable()
export class AuthService {

  loginUrl: string = "http://localhost:8080/login";

  constructor(
    private http: HttpClient
  ) { }

  login(user: User): Observable<HttpResponse<any>> {

    return this.http.post<any>(this.loginUrl, user, {observe: 'response'});
    //   .do( res => {
    //
    //     console.log("TOKEN ??? " +  res.headers.get('Authorization'))
    //
    //     //this.getToken
    //   } );


  }

  getToken(authResult) {

    localStorage.setItem('token', authResult.headers.get('Authorization'));

    console.log("TOKEN ??? " +  authResult.headers.get('Authorization'));

  }
}
