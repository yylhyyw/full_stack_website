import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { InboundService } from '../../services/inbound.service';
import { first } from 'rxjs/operators';
import { Inbound } from '../../models/inbound';
@Component({
  selector: 'app-to-confirm-list',
  templateUrl: './to-confirm-list.component.html',
  styleUrls: ['./to-confirm-list.component.scss'],
  providers: [InboundService, AuthenticationService]
})
export class ToConfirmListComponent implements OnInit {

  public status = ['Success', 'Unknown Status', 'Canceled'];
  public userEmail: any;

  public privilege: any;

  public recordList: any;

  public selectInbound = new Inbound(
    '',
    '',
    null,
    '',
    '',
    '',
    null,
    null,
    null
  );
  constructor(
    private inboundService: InboundService,
    private authenticationService: AuthenticationService
  ) {}

  public noRecord: any;
  ngOnInit() {
    if (this.authenticationService.currentUserValue) {
      this.userEmail = this.authenticationService.currentUserValue[0];
      if (this.authenticationService.currentUserValue[2] === 'company') {
        this.privilege = true;
        this.getRecordsCompany(this.userEmail);
      } else {
        this.privilege = false;
        this.getRecords(this.userEmail);
      }
      // this.userEmail = 'admin';
    } else {
      // TODO: add no userEmail error
    }
  }

  getRecords(userEmail) {
    this.inboundService
      .tenRecords(userEmail)
      .pipe(first())
      .subscribe(
        data => {
          this.recordList = data;
        },
        error => {
          console.log(error);
        },
        () => {
          if (this.recordList.length < 1) {
            this.noRecord = true;
          }
        }
      );
  }

  getRecordsCompany(userEmail) {
    this.inboundService
      .tenRecordsCompany(userEmail)
      .pipe(first())
      .subscribe(data => {
        this.recordList = data;
      });
  }

  cancelInbound(index: number) {
    this.selectInbound.dealId = this.recordList[index].dealId;
    this.selectInbound.quantity = this.recordList[index].quantity;
    this.selectInbound.id = this.recordList[index].id;
    this.inboundService.cancelInbound(this.selectInbound).pipe(first()).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }
}
