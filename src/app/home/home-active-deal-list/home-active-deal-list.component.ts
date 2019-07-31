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

import { thisExpression, arrayExpression } from 'babel-types';

declare var $: any;
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
    null,
    null,
    '',
    '',
    false,
    false,
    false,
    ''
  );

  public publicWarehouse = '13 Garabedian Dr, Unit C, Salem NH 03079';

  public privateWarehouse = '';

  public isUpdated: any;

  public selfWarehouse = false;

  public isAwards = false;

  public awardsUsers: any;

  public awards = 0;

  public isUpdateAwards: boolean;

  public month: any;

  public days: any;

  public year: any;

  public hour: any;

  public minutes: any;

  public isPublic: any;

  public isPrivate: any;

  public memberList: any;

  public groupList: any;

  public membersTemp: any;

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
            this.getActiveListIndividual(
              this.followingList[0].company,
              this.creator
            );
          } else {
            this.noFollowing = true;
          }
        }
      );
  }

  takeDeal(productId: any) {
    if (!this.privilege) {
      if (productId >= 0) {
        this.inbound.product = this.dealList[productId].product_name;
        this.inbound.price = this.dealList[productId].price;
        this.inbound.quantity = 0;
        this.inbound.warehouse = this.publicWarehouse;
        if (this.followingList) {
          this.inbound.company = this.followingList[0].company;
        }
        this.inbound.individual = this.creator;
        this.inbound.status = 0;
        this.inbound.companyStatus = 0;
        this.inbound.dealId = this.dealList[productId].id;
        this.inbound.bonus = this.dealList[productId].bonus;
      }
    } else {
      this.selectDeal.id = this.dealList[productId].id;
      this.selectDeal.productName = this.dealList[productId].product_name;
      this.selectDeal.quantity = this.dealList[productId].quantity;
      this.selectDeal.price = this.dealList[productId].price;
      const currentTime = new Date(this.dealList[productId].expires_at);
      this.month = (currentTime.getMonth() + 1).toString();
      this.days = currentTime.getDate().toString();
      this.year = currentTime.getFullYear().toString();
      this.hour = currentTime.getHours().toString();
      this.minutes = currentTime.getMinutes().toString();
      this.selectDeal.note = this.dealList[productId].note;
      this.selectDeal.bonus = this.dealList[productId].bonus;
      this.selectDeal.serviceTag = this.dealList[productId].service_tag;
      this.selectDeal.notify = this.dealList[productId].notify;
      this.selectDeal.creator = this.dealList[productId].creator;
      // this.selectDeal.warehouse = this.publicWarehouse;
    }
  }

  createInbound() {
    if (this.selfWarehouse) {
      this.inbound.warehouse = this.privateWarehouse;
    } else {
      this.inbound.warehouse = this.publicWarehouse;
    }
    this.inboundService
      .create(this.inbound)
      .pipe(first())
      .subscribe(data => {
        this.ngOnInit();
        this.isCreated = true;
        this.inbound.clear();
        this.selectProductId = null;
      });
  }

  updateCompany() {
    if (this.awardsUsers) {
      this.update();
    }
    this.dealService
      .updateCompany(this.selectDeal)
      .pipe(first())
      .subscribe(data => {
        this.ngOnInit();
        this.awards = 0;
        this.selectDeal.clear();
      });
  }
  useSelfWarehouse() {
    this.selfWarehouse = true;
    this.inbound.publicWarehouse = false;
  }

  usePublicWarehouse() {
    this.selfWarehouse = false;
    this.inbound.publicWarehouse = true;
  }
  makeAwards() {
    this.isAwards = true;
    this.inboundService
      .findAwardsUser(this.selectDeal.id)
      .pipe(first())
      .subscribe(data => {
        this.awardsUsers = data;
      });
  }

  cancelAwards() {
    this.isAwards = false;
    this.awardsUsers = null;
  }

  update() {
    let i = 0;
    const awardsIds: number[] = new Array();
    if (this.awardsUsers) {
      while (this.awardsUsers[i]) {
        awardsIds.push(this.awardsUsers[i].id);
        i++;
      }
    }
    // console.log(awardsIds);
    this.inboundService
      .updateAwards(awardsIds, this.selectDeal.price, this.awards)
      .pipe(first())
      .subscribe(
        data => {
          this.isUpdateAwards = true;
        },
        error => {
          console.log(error);
        },
        () => {
          this.awardsUsers = null;
        }
      );
  }
  makePublic() {
    this.membersTemp = '';
    this.isPublic = true;
    this.isPrivate = false;
    this.selectDeal.dealPublic = true;
    this.groupService
      .allSubscribers(this.selectDeal.creator)
      .pipe(first())
      .subscribe(
        data => {
          this.memberList = data;
        },
        error => {
          console.log(error);
        },
        () => {
          setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
            $('.selectpicker').selectpicker('selectAll');
          });
        }
      );
  }
  makePrivate() {
    this.membersTemp = '';
    this.isPublic = false;
    this.isPrivate = true;
    this.selectDeal.dealPublic = false;
    this.groupService
      .groupRetrieve(this.selectDeal.creator)
      .pipe(first())
      .subscribe(
        data => {
          this.groupList = data;
        },
        error => {
          console.log(error);
        },
        () => {
          setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
          });
        }
      );
  }
}
