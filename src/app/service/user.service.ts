import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import {Response} from '../model/response';

@Injectable()
export class UserService {

  usersUrl = 'http://localhost:8080/user/';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl + 'showAll' );
  }

  getUserByEmail(email): Observable<User> {
    return this.http.get<User>(this.usersUrl + '?email=' + email);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl + 'create', user);
  }

  deleteUser(users: User[]): Observable<Response> {
    return this.http.post<Response>(this.usersUrl + 'delete', users);
  }
}
