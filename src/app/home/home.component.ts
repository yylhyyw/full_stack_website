import {
  Component,
  OnInit,
  NgModule,
  Output,
  EventEmitter
} from '@angular/core';
import { Router } from '@angular/router';
import { Deal } from '../models/deal';
import { AuthenticationService } from '../services/authentication.service';
import { ProductService } from '../services/product.service';
import { first } from 'rxjs/operators';
import { DealService } from '../services/deal.service';
import { GroupService } from '../services/group.service';
import { Email } from '../models/email';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProductService, AuthenticationService, DealService, GroupService]
})
export class HomeComponent implements OnInit {
  public productList: any;

  public privilege: any;

  public deal = new Deal(0, '', null, 0, '', '', true, false, false, '');

  public month: string;

  public days: string;

  public year: string;

  public hour: string;

  public minutes: string;

  public selectProduct: any;

  public error: string;

  public isCreated = false;

  public isPublic: any;

  public isPrivate: any;

  public memberList: any;

  public groupList: any;

  public membersTemp: any;

  public today: Date;

  public email = new Email();
  constructor(
    private dealService: DealService,
    private productService: ProductService,
    private groupService: GroupService,
    private authenticationService: AuthenticationService,
    private router: Router // private homeActiveDealListComponent: HomeActiveDealListComponent
  ) {}

  ngOnInit() {
    this.today = new Date();
    this.today.setDate(this.today.getDate() + 3);
    // console.log(this.today);
    this.month = (this.today.getMonth() + 1).toString().slice(-2);
    // console.log(this.month);
    this.days = this.today
      .getDate()
      .toString()
      .slice(-2);
    // console.log(this.days);
    this.year = this.today.getFullYear().toString();
    this.hour = this.today.getHours().toString();
    this.minutes = this.today.getMinutes().toString();
    if (this.router.url === '/home' || this.router.url === '/home/active') {
      document.getElementById('active-tab').classList.add('active');
    } else if (this.router.url === '/home/expired') {
      document.getElementById('expired-tab').classList.add('active');
    } else if (this.router.url === '/home/propose') {
      document.getElementById('proposed-tab').classList.add('active');
    }
    if (this.authenticationService.currentUserValue) {
      this.deal.creator = this.authenticationService.currentUserValue[0];
      if (this.authenticationService.currentUserValue[2] === 'company') {
        this.privilege = true;
        this.getNameId();
        if (this.productList) {
          this.selectProduct = this.productList[0];
        }
      } else {
        this.privilege = false;
      }
    }
  }

  getNameId() {
    this.productService
      .productNameId(this.deal.creator)
      .pipe(first())
      .subscribe(
        data => {
          this.productList = data;
        },
        error => {
          console.log(error);
        },
        () => {
          setTimeout(() => {
            // $('.selectpicker').addClass('fixedWidth').selectpicker('setStyle');
            $('.selectpicker').selectpicker('render');
            $('.selectpicker').selectpicker('refresh');
          });
        }
      );
  }
  setProductNameId() {
    if (this.selectProduct) {
      this.deal.products = this.selectProduct.id;
      this.deal.productName = this.selectProduct.name;
    }
    document.getElementById('active-tab').classList.add('active');
  }

  create() {
    if (this.month && this.days && this.year && this.hour && this.minutes) {
      const date =
        this.year +
        '-' +
        this.month +
        '-' +
        this.days +
        ' ' +
        this.hour +
        ':' +
        this.minutes +
        ':' +
        '00';
      this.deal.expiresAt = date;
      this.deal.members = this.membersTemp.join();
    } else {
      // TODO: need to improve error handle.
      this.error = 'please fill out all parts';
      return;
    }
    this.dealService
      .createDeal(this.deal)
      .pipe(first())
      .subscribe(
        data => {
          this.isCreated = true;
          window.location.reload();
          // console.log(data);
          // this.homeActiveDealListComponent.dealList[data.id] = this.deal;
          // console.log(this.homeActiveDealListComponent.dealList[''])
          // this.deal.clear();
          // this.ngOnInit();
        },
        error => {
          console.log(error);
        },
        () => {
          this.emailNotification(this.deal);
          this.deal.clear();
        }
      );
  }

  emailNotification(deal) {
    if (this.deal.notify === true) {
      this.email.emailList = deal.members;
      this.email.emailSubject = deal.productName;
      this.email.emailText = deal.note;
      this.dealService
        .emailNotification(this.email)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
          },
          error => {
            console.log(error);
          },
          () => {
            console.log('done');
          }
        );
    }
  }

  search() {
    // Declare variables
    const input = document.getElementById('searchInput') as HTMLInputElement;
    const filter = input.value.toUpperCase();
    const table = document.getElementById('dealTable');
    const tr = table.getElementsByTagName('tr');

    // Loop through all table rows, and hide those who don't match the search query
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < tr.length; i++) {
      const td = tr[i].getElementsByTagName('td')[0];
      if (td) {
        const txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }

  makePublic() {
    this.membersTemp = '';
    this.isPublic = true;
    this.isPrivate = false;
    this.deal.dealPublic = true;
    this.groupService
      .allSubscribers(this.deal.creator)
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
    this.deal.dealPublic = false;
    this.groupService
      .groupRetrieve(this.deal.creator)
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
