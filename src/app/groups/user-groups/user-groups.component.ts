import { Component, OnInit } from '@angular/core';

import { GroupService } from '../../services/group.service';

import { AuthenticationService } from '../../services/authentication.service';

import { Group } from '../../models/group';
import { pipe } from 'rxjs';
import { first } from 'rxjs/operators';

declare var $: any;
@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss'],
  providers: [GroupService]
})
export class UserGroupsComponent implements OnInit {
  public currentUser: any;

  public privilege: any;

  public groupList: any;

  public selectedGroup = new Group('', '', '');

  public createGroup = new Group('', '', '');

  public isCreated: any;

  public isDeleted: any;

  public selectedMember: any;

  public allMembers: any;

  public isEditing = false;

  public selectGroupMember: string;

  public groupNotInclude: any;

  public selectId: any;

  constructor(
    private groupService: GroupService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    if (this.authenticationService.currentUserValue) {
      this.currentUser = this.authenticationService.currentUserValue[0];
      if (this.authenticationService.currentUserValue[2] === 'company') {
        this.privilege = true;
        this.groupRetrieve();
        this.getAll();
      } else {
        this.privilege = false;
        // error handle, should not be there.
      }
    }
  }

  getAll() {
    this.groupService
      .allSubscribers(this.currentUser)
      .pipe(first())
      .subscribe(
        data => {
          this.allMembers = data;
        },
        error => {
          console.log(error);
        },
        () => {
          setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
          });
        }
      );
  }
  // retrieve all groups

  groupRetrieve() {
    this.groupService
      .groupRetrieve(this.currentUser)
      .pipe(first())
      .subscribe(data => {
        this.groupList = data;
      });
  }
  // create groups
  groupCreate() {
    if (this.createGroup.name && this.createGroup.member) {
      this.createGroup.creator = this.currentUser;
    }
    this.groupService
      .groupCreate(this.createGroup)
      .pipe(first())
      .subscribe(data => {
        this.isCreated = true;
        this.createGroup.clear();
        this.ngOnInit();
      });
  }

  // delete groups
  groupDelete(id, pageId) {
    this.groupService
      .groupDelete(id)
      .pipe(first())
      .subscribe(data => {
        this.groupList.pop(pageId);
        this.isDeleted = true;
        this.ngOnInit();
      });
  }

  groupEdit(id) {
    this.isEditing = true;
  }

  selectGroup(i) {
    this.selectGroupMember = this.groupList[i].member;
    this.selectId = this.groupList[i].id;
  }

  checkExisted(member) {
    if (member && this.selectGroupMember) {
      if (this.selectGroupMember.includes(member)) {
        return false;
      } else {
        return true;
      }
    }
  }
  groupMemberAdd(i) {
    const memberAdd = this.allMembers[i].individual;
    const currentMemberArray = this.selectGroupMember.split(',');
    currentMemberArray.push(memberAdd);
    const currentMemberString = currentMemberArray.toString();
    this.groupService
      .updateGroup(this.selectId, currentMemberString)
      .pipe(first())
      .subscribe(
        data => {},
        error => {
          console.log(error);
        },
        () => {
          this.ngOnInit();
        }
      );
  }

  groupMemberDelete(i) {
    const memberAdd = this.allMembers[i].individual;
    const currentMemberArray = this.selectGroupMember.split(',');
    currentMemberArray.splice(i, 1);
    const currentMemberString = currentMemberArray.toString();
    this.groupService
      .updateGroup(this.selectId, currentMemberString)
      .pipe(first())
      .subscribe(
        data => {},
        error => {
          console.log(error);
        },
        () => {
          this.ngOnInit();
        }
      );
  }
}
