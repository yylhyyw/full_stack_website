import { Component, OnInit } from '@angular/core';

import { StorageService } from '../services/storage.service';

import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss'],
  providers: [StorageService]
})
export class StorageComponent implements OnInit {
  public addressAdd: string;
  public creator: any;
  public privilege: boolean;
  public addressList: any;
  public isCreated: any;

  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    if (this.authenticationService.currentUserValue) {
      this.creator = this.authenticationService.currentUserValue[0];
      if (this.authenticationService.currentUserValue[2] === 'company') {
        this.privilege = true;
      } else {
        this.privilege = false;
      }
    }
    this.retrieve();
  }

  create() {
    if (this.addressAdd) {
      this.storageService
        .addAddress(this.addressAdd, this.creator)
        .pipe(first())
        .subscribe(
          data => {
            this.isCreated = true;
          },
          error => {
            console.log(error);
          },
          () => {
            this.ngOnInit();
          }
        );
    }
  }
  retrieve() {
    this.storageService
      .retrieve(this.creator)
      .pipe(first())
      .subscribe(data => {
        this.addressList = data;
      });
  }
}
