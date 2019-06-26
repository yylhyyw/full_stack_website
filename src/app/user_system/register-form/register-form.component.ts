import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  providers: [RegisterService],
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {


  private isRegistered = false;

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  register = new Register();

  user_register() {
    this.registerService
      .userRegister(this.register)
      .pipe(first())
      .subscribe(data => {
        this.isRegistered = true;
        // console.log(this.returnUrl);
      });
  }

  ngOnInit() {}
}
