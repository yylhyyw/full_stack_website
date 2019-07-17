import { Component, OnInit } from '@angular/core';

import { GroupService } from '../../services/group.service';
import { AuthenticationService } from '../../services/authentication.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-groups-waiting-list',
  templateUrl: './groups-waiting-list.component.html',
  styleUrls: ['./groups-waiting-list.component.scss'],
  providers: [AuthenticationService, GroupService]
})
export class GroupsWaitingListComponent implements OnInit {
  public privilege: string;

  public user: string;

  public followersList: any;

  public debug: any;

  public statusLevel = ['Ask To Follow', 'Active', 'Blocked'];

  constructor(
    private groupService: GroupService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    if (this.authenticationService.currentUserValue) {
      this.privilege = this.authenticationService.currentUserValue[2];
      this.user = this.authenticationService.currentUserValue[0];
    }
    this.getfollowersListTenWaiting();
  }

  getfollowersListTenWaiting() {
    if (this.privilege !== 'company') {
      // TODO: error handle
    } else {
      this.groupService
        .tenSubscribersWaiting(this.user)
        .pipe(first())
        .subscribe(data => {
          this.followersList = data;
        });
    }
  }
}
