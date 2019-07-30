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
  createUrl = 'http://192.168.1.86:8081/api/inbound/add'; // URL to web api
  tenUrl = 'http://192.168.1.86:8081/api/inbound/individualFind';
  allUrl = 'http://192.168.1.86:8081/api/inbound/individualFind';
  confirmUrl = 'http://192.168.1.86:8081/api/inbound/findRecords';
  tenCompanyUrl = 'http://192.168.1.86:8081/api/inbound/companyFind';
  proposeRetrieveUrl = 'http://192.168.1.86:8081/api/inbound/proposeRetrieve';
  proposeRetrieveCompanyUrl =
    'http://192.168.1.86:8081/api/inbound/proposeRetrieveCompany';
  createProposeUrl = 'http://192.168.1.86:8081/api/inbound/createPropose';
  proposeConfirmUrl = 'http://192.168.1.86:8081/api/inbound/proposeConfirm';
  cancelInboundUrl = 'http://192.168.1.86:8081/api/inbound/cancelInbound';
  findAwardsUsersUrl = 'http://192.168.1.86:8081/api/inbound/findAwardsUser';
  updateAwardsUrl = 'http://192.168.1.86:8081/api/inbound/updateAwards';
  // NameUrl = 'http://192.168.1.119:8081/api/product/name';
  constructor(private http: HttpClient) {}

  cancelInbound(inbound: Inbound): Observable<Inbound> {
    return this.http.post<Inbound>(this.cancelInboundUrl, inbound, httpOptions);
  }
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

  proposeRetrieve(individual: string): Observable<string> {
    const creatorJSON = '{ "individual" : ' + '"' + individual + '"' + ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.proposeRetrieveUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }
  proposeRetrieveCompany(company: string): Observable<string> {
    const creatorJSON = '{ "company" : ' + '"' + company + '"' + ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.proposeRetrieveCompanyUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }

  createPropose(inbound: Inbound): Observable<Inbound> {
    return this.http.post<Inbound>(this.createProposeUrl, inbound, httpOptions);
  }

  proposeConfirm(
    id: number,
    quantity: number,
    dealId: number
  ): Observable<string> {
    const creatorJSON =
      '{ "id" : ' +
      '"' +
      id +
      '"' +
      ', ' +
      '"quantity" : ' +
      '"' +
      quantity +
      '"' +
      ', ' +
      '"dealId" : ' +
      '"' +
      dealId +
      '"' +
      ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.proposeConfirmUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }
  findAwardsUser(dealId: number): Observable<number> {
    const creatorJSON = '{ "dealId" : ' + '"' + dealId + '"' + ' }';

    return this.http.post<number>(
      this.findAwardsUsersUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }

  updateAwards(
    inboundIds: Array<number>,
    price: number,
    awards: number
  ): Observable<any> {
    const creatorJSON =
      '{ "inboundIds" : ' +
      '"' +
      inboundIds +
      '"' +
      ', ' +
      '"price" : ' +
      '"' +
      price +
      '"' +
      ', ' +
      '"awards" : ' +
      '"' +
      awards +
      '"' +
      ' }';
    // console.log(JSON.parse(creatorJSON));
    return this.http.post<any>(
      this.updateAwardsUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }
}
