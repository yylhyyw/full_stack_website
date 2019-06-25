import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  providers: [UserService],
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  get diagnostic() {
    return JSON.stringify(this.user);
  }

  user = new User('', '');
  submitted = false;
  loading = false;
  returnUrl: string;


  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
  }



  onSubmit() {
    this.submitted = true;
    this.loading = true;

    this.authenticationService.login(this.user)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
        // console.log(this.returnUrl);
      });
    // const newUser: User = this.user;
    // this.userService.userVaildate(newUser).subscribe(data => {
    //   // console.log(data);
    //   console.log(data[0].group_id);
    // });
  }
}
