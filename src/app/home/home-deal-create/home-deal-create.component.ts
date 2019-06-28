import { Component, OnInit } from '@angular/core';

import { DealLink } from '../../models/dealLink';

import { Deal } from '../../models/deal';

import {CreateDealService} from '../../services/createdeal.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home-deal-create',
  templateUrl: './home-deal-create.component.html',
  providers: [CreateDealService],
  styleUrls: ['./home-deal-create.component.scss']
})
export class HomeDealCreateComponent implements OnInit {
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
  public deal = new Deal();
  public link = new DealLink();
  public links: DealLink[] = [];

  constructor(private createDealService: CreateDealService) {}

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
    this.createDealService
    .createDeal(this.deal)
    .pipe(first())
    .subscribe(data => {
      console.log(data);
      this.isCreated = true;
    });
  }
}
