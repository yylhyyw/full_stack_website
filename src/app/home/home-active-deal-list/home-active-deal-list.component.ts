import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Deal } from '../../models/deal';

import { DealService } from '../../services/deal.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';

import { ProductService } from '../../services/product.service';

import { GroupService } from '../../services/group.service';

import { Inbound } from '../../models/inbound';

import { InboundService } from '../../services/inbound.service';

import { LinkifyPipe } from '../../custom-pipes/linkify.pipe';

import { thisExpression } from 'babel-types';

@Component({
  selector: 'app-home-active-deal-list',
  templateUrl: './home-active-deal-list.component.html',
  styleUrls: ['./home-active-deal-list.component.scss'],
  providers: [
    DealService,
    AuthenticationService,
    ProductService,
    GroupService,
    InboundService,
    LinkifyPipe
  ]
})
export class HomeActiveDealListComponent implements OnInit {
  // private activeDeal: Deal;
  public dealList: any;
  private creator: string;

  public privilege: any;

  public followingList: any;

  public hasNext: any;

  public isCreated = false;

  public inbound = new Inbound('', '', null, '', '', '', null, null, null);

  public selectProductId: any;

  public noFollowing: any;

  public selectDeal = new Deal(
    null,
    '',
    '',
    null,
    '',
    '',
    false,
    false,
    false,
    ''
  );

  public selectWarehouse = '';

  public isUpdated: any;
  constructor(
    private dealService: DealService,
    private authenticationService: AuthenticationService,
    private productService: ProductService,
    private groupService: GroupService,
    private inboundService: InboundService,
    private linkify: LinkifyPipe
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

  getActiveListIndividual(creator, individual) {
    this.dealService
      .individualDeals(creator, individual)
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
          if (this.followingList[0]) {
            this.getActiveListIndividual(this.followingList[0].company, this.creator);
          } else {
            this.noFollowing = true;
          }
        }
      );
  }

  takeDeal(productId: any) {
    this.selectProductId = productId;
    if (!this.privilege) {
      if (productId >= 0) {
        this.inbound.product = this.dealList[productId].product_name;
        this.inbound.price = this.dealList[productId].price;
        this.inbound.quantity = 0;
        this.inbound.warehouse = 'NH';
        if (this.followingList) {
          this.inbound.company = this.followingList[0].company;
        }
        this.inbound.individual = this.creator;
        this.inbound.status = 0;
        this.inbound.companyStatus = 0;
        this.inbound.dealId = this.dealList[productId].id;
      }
    } else {
      this.selectDeal.id = this.dealList[productId].id;
      this.selectDeal.productName = this.dealList[productId].product_name;
      this.selectDeal.quantity = this.dealList[productId].quantity;
      this.selectDeal.price = this.dealList[productId].price;
      this.selectWarehouse = 'NH';
    }
  }

  createInbound() {
    this.inboundService
      .create(this.inbound)
      .pipe(first())
      .subscribe(data => {
        this.dealList[this.selectProductId].quantity = data.quantity;
        this.isCreated = true;
        this.inbound.clear();
        this.selectProductId = null;
      });
  }

  updateCompany() {
    this.dealService
      .updateCompany(this.selectDeal)
      .pipe(first())
      .subscribe(data => {
        this.dealList[this.selectProductId].price = data.price;
        this.dealList[this.selectProductId].quantity = data.quantity;
        this.dealList[this.selectProductId].quantityTaken = data.quantityTaken;
        this.isUpdated = true;
      });
  }
}
