import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [AuthenticationService]
})
export class DashboardComponent implements OnInit {
  public privilege: any;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    // privilege check
    if (this.authenticationService.currentUserValue) {
      if (this.authenticationService.currentUserValue[2] === 'company') {
        this.privilege = true;
      } else {
        this.privilege = false;
      }
    }
  }
}
