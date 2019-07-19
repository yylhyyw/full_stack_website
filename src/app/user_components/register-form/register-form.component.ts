import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  providers: [RegisterService, AuthenticationService],
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  // register = new Register();
  register = new Register();
  confirmedPassword: string;

  private isRegistered = false;

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  formValid() {
    if (
      this.register.FirstName &&
      this.register.LastName &&
      this.register.email &&
      this.register.password &&
      this.pwdValid()
    ) {
      return true;
    }
    return false;
  }

  user_register() {
      this.registerService
        .userRegister(this.register)
        .pipe(first())
        .subscribe(data => {
          this.isRegistered = true;
          this.register.clear();
          this.confirmedPassword = '';
        });
    }

  ngOnInit() {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }

  pwdValid() {
    if (this.confirmedPassword === this.register.password) {
      return true;
    }
    return false;
  }
}
