import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  user = new User('', '');
  submitted = false;
  loading = false;
  error = '';

  ngOnInit() {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['dashboard']);
    }
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    this.authenticationService
      .login(this.user)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['dashboard']);
        },
        error => {
          console.log(error);
          this.error = error;
        }
      );
  }
}
