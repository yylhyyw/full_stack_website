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
export class StorageService {
  addAddressUrl = 'http://192.168.1.90:8081/api/address/add';
  countUrl = 'http://192.168.1.90:8081/api/address/count';
  retrieveUrl = 'http://192.168.1.90:8081/api/address/retrieve';
  constructor(private http: HttpClient) {}

  addAddress(address: string, creator: string): Observable<string> {
    const creatorJSON =
      '{ "address" : ' +
      '"' +
      address +
      '"' +
      ', ' +
      '"creator" : ' +
      '"' +
      creator +
      '"' +
      ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.addAddressUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }

  count(creator: string): Observable<string> {
    const creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.countUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }

  retrieve(creator: string): Observable<string> {
    const creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.retrieveUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }
}
