import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Deal } from '../models/deal';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
};
@Injectable()
export class DealService {
  createDealUrl = 'http://192.168.1.119:8081/api/createdeal'; // URL to web api
  tenDealsUrl = 'http://192.168.1.119:8081/api/deal/active/firstTen';
  constructor(private http: HttpClient) {}

  createDeal(deal: Deal): Observable<Deal> {
    return this.http.post<Deal>(this.createDealUrl, deal, httpOptions);
  }

  tenDeals(creator: string): Observable<string> {
    const creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.tenDealsUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }
}
