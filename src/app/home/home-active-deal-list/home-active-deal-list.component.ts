import { Component, OnInit } from '@angular/core';
import { Deal } from '../../models/deal';

import { DealService } from '../../services/deal.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';

import { ProductService } from '../../services/product.service';

import { GroupService } from '../../services/group.service';

import { Inbound } from '../../models/inbound';

import { InboundService } from '../../services/inbound.service';

@Component({
  selector: 'app-home-active-deal-list',
  templateUrl: './home-active-deal-list.component.html',
  styleUrls: ['./home-active-deal-list.component.scss'],
  providers: [
    DealService,
    AuthenticationService,
    ProductService,
    GroupService,
    InboundService
  ]
})
export class HomeActiveDealListComponent implements OnInit {
  // private activeDeal: Deal;
  private dealList: any;
  private creator: string;

  public privilege: any;

  public followingList: any;

  public hasNext: any;

  public isCreated = false;

  public inbound = new Inbound('', '', null, '', '', '', null, null, null);

  constructor(
    private dealService: DealService,
    private authenticationService: AuthenticationService,
    private productService: ProductService,
    private groupService: GroupService,
    private inboundService: InboundService
  ) {}

  ngOnInit() {
    if (this.authenticationService.currentUserValue) {
      this.creator = this.authenticationService.currentUserValue[0];
      if (this.authenticationService.currentUserValue[2] === 'company') {
        this.privilege = true;
        this.getActiveList(this.creator);
      } else {
        this.privilege = false;
        this.getfollowing(this.creator);
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

  getfollowing(creator) {
    this.groupService
      .findfollowing(creator)
      .pipe(first())
      .subscribe(
        data => {
          this.followingList = data;
          // console.log(this.followingList);
        },
        error => {
          console.log(error);
        },
        () => {
          this.getActiveList(this.followingList[0].company);
        }
      );
  }

  takeDeal(productId: any) {
    if (productId >= 0) {
      this.inbound.product = this.dealList[productId].product_name;
      this.inbound.price = this.dealList[productId].price;
      this.inbound.warehouse = 'NH';
      this.inbound.company = this.followingList[0].company;
      this.inbound.individual = this.creator;
      this.inbound.status = 0;
      this.inbound.companyStatus = 0;
      this.inbound.dealId = this.dealList[productId].id;
    }
  }

  createInbound() {
    this.inboundService
      .create(this.inbound)
      .pipe(first())
      .subscribe(data => {
        this.isCreated = true;
        this.inbound.clear();
      });
  }
}
