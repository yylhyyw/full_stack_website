import {
  Component,
  OnInit
} from '@angular/core';
import {
  Register
} from '../../models/register';
import {
  RegisterService
} from '../../services/register.service';
import {
  Router
} from '@angular/router';
import {
  first
} from 'rxjs/operators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  providers: [RegisterService],
  styleUrls: ['../sign-in-form/sign-in-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router) {}

  register = new Register();

  get diagnostic() {
    return JSON.stringify(this.register);
  }
  user_register() {
    this.registerService.userRegister(this.register)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['signin']);
          // console.log(this.returnUrl);
        });
  }
  ngOnInit() {}

}
