import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { DealService } from '../../services/deal.service';
import { GroupService } from '../../services/group.service';
import { InboundService } from '../../services/inbound.service';
import { first } from 'rxjs/operators';
import { Inbound } from '../../models/inbound';
import { Deal } from '../../models/deal';

@Component({
  selector: 'app-propose-deal',
  templateUrl: './propose-deal.component.html',
  styleUrls: ['./propose-deal.component.scss'],
  providers: [AuthenticationService, DealService, GroupService, InboundService]
})
export class ProposeDealComponent implements OnInit {
  public privilege: any;
  public currentUser: any;
  public proposeList: any;

  constructor(
    private authenticationService: AuthenticationService,
    private dealService: DealService,
    private groupService: GroupService,
    private inboundService: InboundService
  ) {}

  ngOnInit() {
    if (this.authenticationService.currentUserValue) {
      this.currentUser = this.authenticationService.currentUserValue[0];
      if (this.authenticationService.currentUserValue[2] === 'company') {
        this.privilege = true;
        this.proposeRetrieveCompany(this.currentUser);
      } else {
        this.privilege = false;
        this.proposeRetrieve(this.currentUser);
      }
    }
  }

  proposeRetrieve(individual: string) {
    this.inboundService
      .proposeRetrieve(individual)
      .pipe(first())
      .subscribe(data => {
        this.proposeList = data;
      });
  }

  proposeRetrieveCompany(individual: string) {
    this.inboundService
      .proposeRetrieveCompany(individual)
      .pipe(first())
      .subscribe(data => {
        this.proposeList = data;
      });
  }
}
