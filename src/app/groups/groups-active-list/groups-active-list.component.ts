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
  // status mapping from 0,1,2 to specific meaning
  public statusLevel = ['Ask To Follow', 'Active', 'Blocked'];
  // used to make sure which one is selected
  public selectId: any;
  // used to pass data to API
  public selectSubscription = new Subscription(null, null, null);

  constructor(
    private groupService: GroupService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    // privilege check
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

  setActive() {
    this.groupService
      .setActive(this.selectSubscription)
      .pipe(first())
      .subscribe(data => {
        this.ngOnInit();
      });
  }
  setBlock() {
    this.groupService
      .setBlock(this.selectSubscription)
      .pipe(first())
      .subscribe(data => {
        this.ngOnInit();
      });
  }

  subSelect(i: any) {
    this.selectId = i;
    this.selectSubscription.individual = this.followersList[i].individual;
    this.selectSubscription.status = this.followersList[i].status;
    this.selectSubscription.company = this.followersList[this.selectId].company;
  }
}
