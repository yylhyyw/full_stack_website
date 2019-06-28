import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import {Deal} from '../models/deal';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
};
@Injectable()
export class CreateDealService {
  createDealUrl = 'http://localhost:3000/api/createdeal';  // URL to web api
  constructor(private http: HttpClient) { }

  createDeal(deal: Deal): Observable<Deal> {
    return this.http.post<Deal>(this.createDealUrl, deal, httpOptions);
  }
}
