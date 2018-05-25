import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import 'rxjs-compat/add/operator/do';
import 'rxjs-compat/add/operator/shareReplay';

import * as moment from 'moment';

@Injectable()
export class AuthService {

  loginUrl: string = "http://localhost:8080/login";

  constructor(
    private http: HttpClient
  ) { }

  login(user: User): Observable<HttpResponse<any>> {

    return this.http.post<any>(this.loginUrl, user, {observe: 'response'})
      .do( res => this.getToken(res) );


  }

  getToken(authResult) {
    const expiresAt = moment().add(authResult.headers.get('Expires'),'second');

    localStorage.setItem("Expires", JSON.stringify(expiresAt.valueOf()) );
    localStorage.setItem('token', authResult.headers.get('Authorization'));
    console.log("TOKEN ??? " +  authResult.headers.get('Authorization'));
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
