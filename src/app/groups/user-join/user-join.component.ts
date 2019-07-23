import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { GroupService } from '../../services/group.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-user-join',
  templateUrl: './user-join.component.html',
  styleUrls: ['./user-join.component.scss'],
  providers: [AuthenticationService]
})
export class UserJoinComponent implements OnInit {
  public privilege: any;

  public currentUser: any;

  public company: any;

  public isExisted: any;

  public isRequested: any;

  constructor(
    private authenticationService: AuthenticationService,
    private groupService: GroupService
  ) {}

  ngOnInit() {
    if (this.authenticationService.currentUserValue) {
      if (this.authenticationService.currentUserValue[2] === 'company') {
        this.privilege = true;
        this.currentUser = this.authenticationService.currentUserValue[0];
      } else {
        this.privilege = false;
        this.currentUser = this.authenticationService.currentUserValue[0];
      }
    }
  }

  checkRelationship() {
    this.groupService
      .checkRelationship(this.currentUser, this.company)
      .pipe(first())
      .subscribe(
        data => {
          if (data) {
            this.isExisted = true;
          }
        },
        error => {
          console.log(error);
        },
        () => {
          if (!this.isExisted) {
            this.request(this.currentUser, this.company);
          }
        }
      );
  }

  request(individual, company) {
    this.groupService
      .create(individual, company)
      .pipe(first())
      .subscribe(data => {
        this.isRequested = true;
      });
  }
}
