import { Component, OnInit } from '@angular/core';

import { GroupService } from '../../services/group.service';
import { AuthenticationService } from '../../services/authentication.service';
import { first } from 'rxjs/operators';
import { Subscription } from '../../models/subscription';

@Component({
  selector: 'app-groups-active-list',
  templateUrl: './groups-active-list.component.html',
  styleUrls: ['./groups-active-list.component.scss'],
  providers: [AuthenticationService, GroupService]
})
export class GroupsActiveListComponent implements OnInit {
  public privilege: string;

  public user: string;

  public followersList: any;

  public debug: any;

  public statusLevel = ['Ask To Follow', 'Active', 'Blocked'];

  public selectId: any;

  public selectSubscription = new Subscription(null, null, null);

  constructor(
    private groupService: GroupService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    if (this.authenticationService.currentUserValue) {
      this.privilege = this.authenticationService.currentUserValue[2];
      this.user = this.authenticationService.currentUserValue[0];
    }
    this.getfollowersListTen();
  }

  getfollowersListTen() {
    if (this.privilege !== 'company') {
      // TODO: error handle
    } else {
      this.groupService
        .tenSubscribers(this.user)
        .pipe(first())
        .subscribe(data => {
          this.followersList = data;
        });
    }
  }

  setActive(id: any) {
    this.selectId = id;
    this.selectSubscription.individual = this.followersList[
      this.selectId
    ].individual;
    this.selectSubscription.company = this.followersList[this.selectId].company;
    if (id >= 0) {
      this.groupService
        .setActive(this.selectSubscription)
        .pipe(first())
        .subscribe(data => {
          this.followersList[id].status = data.status;
          console.log(this.followersList[id].status);
        });
    }
  }
  setBlock(id: any) {
    this.selectId = id;
    this.selectSubscription.individual = this.followersList[
      this.selectId
    ].individual;
    this.selectSubscription.company = this.followersList[this.selectId].company;
    if (id >= 0) {
      this.groupService
        .setBlock(this.selectSubscription)
        .pipe(first())
        .subscribe(data => {
          this.followersList[id].status = data.status;
          console.log(this.followersList[id].status);
        });
    }
  }
}
