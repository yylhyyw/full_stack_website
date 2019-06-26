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
  private isRegistered = false;

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {}

  register = new Register();

  user_register() {
    this.registerService
      .userRegister(this.register)
      .pipe(first())
      .subscribe(data => {
        console.log(data);
        this.isRegistered = true;
        // console.log(this.returnUrl);
      });
  }

  ngOnInit() {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }
}
