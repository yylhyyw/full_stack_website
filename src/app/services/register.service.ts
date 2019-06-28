import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Register } from '../models/register';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
};
@Injectable()
export class RegisterService {
  registerUrl = 'http://localhost:3000/api/register';  // URL to web api
  constructor(private http: HttpClient) { }

  userRegister(register: Register): Observable<Register> {
    return this.http.post<Register>(this.registerUrl, register, httpOptions);
  }

}
