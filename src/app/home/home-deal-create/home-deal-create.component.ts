import { Component, OnInit } from '@angular/core';

import { DealLink } from '../../models/dealLink';

import { Deal } from '../../models/deal';

import { DealService } from '../../services/deal.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-home-deal-create',
  templateUrl: './home-deal-create.component.html',
  providers: [DealService, AuthenticationService],
  styleUrls: ['./home-deal-create.component.scss']
})
export class HomeDealCreateComponent implements OnInit {
  public deal = new Deal(
    '',
    [],
    '',
    0,
    0,
    '',
    '',
    1,
    JSON.stringify(this.authenticationService.currentUserValue.email).replace(
      /"/g,
      ''
    )
  );
  public link = new DealLink();
  public links: DealLink[] = [];
  warehouses = [
    { name: 'Choose One Below......', value: '' },
    { name: 'NH', value: 'warehouse in NH' },
    { name: 'MA', value: 'warehouse in MA' },
    { name: 'NY', value: 'warehouse in NY' }
  ];
  private isCreated = false;
  get diagnostic() {
    return JSON.stringify(this.deal);
  }
  get extraLinks() {
    return JSON.stringify(this.links);
  }

  constructor(
    private dealService: DealService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    // this.links.push(new DealLink())
    this.deal.deallinks.push(this.link);
  }

  linkAdd() {
    // this.links.push(new DealLink('', ''));
    console.log(this.link.link);
    this.links.push(new DealLink());
  }

  dealCreate() {
    while (this.links.length !== 0) {
      this.deal.deallinks.push(this.links.pop());
    }
    // this.addCreator();

    this.dealService
      .createDeal(this.deal)
      .pipe(first())
      .subscribe(data => {
        console.log(data);
        this.isCreated = true;
      });
  }
  addCreator() {
    console.log(this.deal);
    // this.deal.creator = this.authenticationService.currentUserValue[0].user_email;
    // console.log(this.authenticationService.currentUserValue[0].user_email);
  }
}
