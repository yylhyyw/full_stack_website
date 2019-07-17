import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  currentUser: User;
  company = false;
  individual = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x =>
      this.checkPermission(x)
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/singin']);
    this.company = false;
    this.individual = false;
  }
  checkPermission(x: User) {
    this.currentUser = x;
    if (x) {
      const parsedValue = this.authenticationService.currentUserValue;
      if (parsedValue[2] === 'company') {
        this.company = true;
      } else if (parsedValue[2] === 'individual') {
        this.individual = true;
      }
    }
  }
  ngOnInit() {}
}
