import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Subscription } from '../models/subscription';
import { Observable } from 'rxjs';

import { Group } from '../models/group';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  // public subscription = new Subscription(null, null, null);
  // URL to web api
  tenUrl = 'http://192.168.1.90:8081/api/subscription/findTen';
  allUrl = 'http://192.168.1.90:8081/api/subscription/find';
  setActiveUrl = 'http://192.168.1.90:8081/api/subscription/setactive';
  setBlockUrl = 'http://192.168.1.90:8081/api/subscription/setblock';
  acceptUrl = 'http://192.168.1.90:8081/api/subscription/approve';
  tenBlockedUrl = 'http://192.168.1.90:8081/api/subscription/findTenBlocked';
  tenWaitingUrl = 'http://192.168.1.90:8081/api/subscription/findTenWaiting';
  findfollowingUrl = 'http://192.168.1.90:8081/api/subscription/findfollowing';
  checkRelationshipUrl = 'http://192.168.1.90:8081/api/subscription/check';
  createUrl = 'http://192.168.1.90:8081/api/subscription/create';

  /**
   * user-group URL
   */

  userGroupCreateUrl = 'http://192.168.1.90:8081/api/group/create';
  userGroupDeleteUrl = 'http://192.168.1.90:8081/api/group/delete';
  userGroupRetrieveUrl = 'http://192.168.1.90:8081/api/group/retrieve';
  updateGroupUrl = 'http://192.168.1.90:8081/api/group/update';

  constructor(private http: HttpClient) {}

  updateGroup(groupId: number, groupMember: string): Observable<any> {
    const creatorJSON =
      '{ "groupId" : ' +
      '"' +
      groupId +
      '"' +
      ', ' +
      '"groupMember" : ' +
      '"' +
      groupMember +
      '"' +
      ' }';
    return this.http.post<any>(
      this.updateGroupUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }
  tenSubscribers(company: string): Observable<string> {
    const creatorJSON = '{ "company" : ' + '"' + company + '"' + ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.tenUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }

  allSubscribers(company: string): Observable<string> {
    const creatorJSON = '{ "company" : ' + '"' + company + '"' + ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.allUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }
  setActive(subscription: Subscription): Observable<Subscription> {
    return this.http.post<Subscription>(
      this.setActiveUrl,
      subscription,
      httpOptions
    );
  }

  setBlock(subscription: Subscription): Observable<Subscription> {
    return this.http.post<Subscription>(
      this.setBlockUrl,
      subscription,
      httpOptions
    );
  }

  approve(subscription: Subscription): Observable<Subscription> {
    return this.http.post<Subscription>(
      this.acceptUrl,
      subscription,
      httpOptions
    );
  }

  tenSubscribersBlocked(company: string): Observable<string> {
    const creatorJSON = '{ "company" : ' + '"' + company + '"' + ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.tenBlockedUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }
  tenSubscribersWaiting(company: string): Observable<string> {
    const creatorJSON = '{ "company" : ' + '"' + company + '"' + ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.tenWaitingUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }

  findfollowing(individual: string): Observable<string> {
    const creatorJSON = '{ "individual" : ' + '"' + individual + '"' + ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.findfollowingUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }

  checkRelationship(individual: string, company: string): Observable<string> {
    const creatorJSON =
      '{ "individual" : ' +
      '"' +
      individual +
      '"' +
      ', ' +
      '"company" : ' +
      '"' +
      company +
      '"' +
      ' }';
    // console.log(creatorJSON);
    return this.http.post<string>(
      this.checkRelationshipUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }

  create(individual: string, company: string): Observable<string> {
    const creatorJSON =
      '{ "individual" : ' +
      '"' +
      individual +
      '"' +
      ', ' +
      '"company" : ' +
      '"' +
      company +
      '"' +
      ' }';
    return this.http.post<string>(
      this.createUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }

  /**
   *
   * user-group service
   */
  groupCreate(group: Group): Observable<Group> {
    return this.http.post<Group>(this.userGroupCreateUrl, group, httpOptions);
  }

  groupDelete(id: number): Observable<string> {
    const creatorJSON = '{ "id" : ' + '"' + id + '"' + ' }';
    return this.http.post<string>(
      this.userGroupDeleteUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }

  groupRetrieve(creator: string): Observable<string> {
    const creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';
    return this.http.post<string>(
      this.userGroupRetrieveUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }
}
