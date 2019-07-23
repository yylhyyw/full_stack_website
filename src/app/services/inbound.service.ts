import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Inbound } from '../models/inbound';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
};
@Injectable()
export class InboundService {
  createUrl = 'http://192.168.1.119:8081/api/inbound/add'; // URL to web api
  tenUrl = 'http://192.168.1.119:8081/api/inbound/individualFind';
  allUrl = 'http://192.168.1.119:8081/api/inbound/individualFind';
  confirmUrl = 'http://192.168.1.119:8081/api/inbound/findRecords';
  tenCompanyUrl = 'http://192.168.1.119:8081/api/inbound/companyFind';
  // NameUrl = 'http://192.168.1.119:8081/api/product/name';
  constructor(private http: HttpClient) {}

  tenRecords(individual: string): Observable<string> {
    const creatorJSON = '{ "individual" : ' + '"' + individual + '"' + ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.tenUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }

  tenRecordsCompany(company: string): Observable<string> {
    const creatorJSON = '{ "company" : ' + '"' + company + '"' + ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.tenCompanyUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }

  allRecords(individual: string): Observable<string> {
    const creatorJSON = '{ "individual" : ' + '"' + individual + '"' + ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.allUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }

  confirm(inbound: Inbound): Observable<Inbound> {
    return this.http.post<Inbound>(this.confirmUrl, inbound, httpOptions);
  }

  create(inbound: Inbound): Observable<Inbound> {
    return this.http.post<Inbound>(this.createUrl, inbound, httpOptions);
  }
}