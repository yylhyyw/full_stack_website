import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import {User} from '../models/user';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
};

@Injectable()
export class UserService {
  usersUrl = 'http://localhost:3000/api/signin';  // URL to web api
  // private handleError: HandleError;

  constructor(
    private http: HttpClient) { }
    // httpErrorHandler: HttpErrorHandler) {
    // this.handleError = httpErrorHandler.createHandleError('HeroesService');
  // }
  userVaildate(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, httpOptions);
  }
}
