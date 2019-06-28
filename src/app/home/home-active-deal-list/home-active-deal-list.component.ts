import { Component, OnInit } from '@angular/core';
import { Deal } from '../../models/deal';

import { DealService } from '../../services/deal.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-home-active-deal-list',
  templateUrl: './home-active-deal-list.component.html',
  styleUrls: ['./home-active-deal-list.component.scss'],
  providers: [DealService, AuthenticationService]
})
export class HomeActiveDealListComponent implements OnInit {
  // private activeDeal: Deal;
  private activeDealList: Deal[] = [];
  private creator: string;

  constructor(
    private dealService: DealService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.getActiveList();
  }

  getActiveList() {
    this.dealService
      .tenDeals(this.authenticationService.currentUserValue[0])
      .pipe(first())
      .subscribe(data => {
        this.dealsParse(data, 0);
      });
  }

  dealsParse(deals: string, dealIndex: number) {
    while (!(deals[dealIndex] === undefined)) {
      this.activeDealList.push(
        new Deal(
          JSON.parse(JSON.stringify(deals[dealIndex])).deal_title,
          JSON.parse(JSON.stringify(deals[dealIndex])).deal_link,
          JSON.parse(JSON.stringify(deals[dealIndex])).deal_warehouse,
          JSON.parse(JSON.stringify(deals[dealIndex])).deal_price,
          JSON.parse(JSON.stringify(deals[dealIndex])).deal_quantity,
          JSON.parse(JSON.stringify(deals[dealIndex])).deal_description
        )
      );
      dealIndex = dealIndex + 1;
    }
    console.log(this.activeDealList);
  }
}
