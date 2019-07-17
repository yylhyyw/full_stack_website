import { Component, OnInit } from '@angular/core';
import { Deal } from '../../models/deal';

import { DealService } from '../../services/deal.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';

import { ProductService } from '../../services/product.service';

import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-home-active-deal-list',
  templateUrl: './home-active-deal-list.component.html',
  styleUrls: ['./home-active-deal-list.component.scss'],
  providers: [DealService, AuthenticationService, ProductService, GroupService]
})
export class HomeActiveDealListComponent implements OnInit {
  // private activeDeal: Deal;
  private dealList: any;
  private creator: string;

  public privilege: any;

  public followingList: any;

  constructor(
    private dealService: DealService,
    private authenticationService: AuthenticationService,
    private productService: ProductService,
    private groupService: GroupService
  ) {}

  ngOnInit() {
    if (this.authenticationService.currentUserValue) {
      this.creator = this.authenticationService.currentUserValue[0];
      if (this.authenticationService.currentUserValue[2] === 'company') {
        this.privilege = true;
        this.getActiveList(this.creator);
      } else {
        this.privilege = false;
      }
    }
  }

  getActiveList(creator) {
    this.dealService
      .tenDeals(creator)
      .pipe(first())
      .subscribe(data => {
        this.dealList = data;
      });
  }

}
