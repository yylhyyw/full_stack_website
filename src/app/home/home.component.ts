import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deal } from '../models/deal';
import { AuthenticationService } from '../services/authentication.service';
import { ProductService } from '../services/product.service';
import { first } from 'rxjs/operators';
import { DealService } from '../services/deal.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProductService, AuthenticationService, DealService]
})
export class HomeComponent implements OnInit {
  public productList: any;

  public privilege: any;

  public dubeg: any;

  public deal = new Deal(0, '', '', 0, '', '', false, false, false, '');

  public month: string;

  public days: string;

  public year: string;

  public hour: string;

  public minutes: string;

  public selectProduct: any;

  public error: string;

  public isCreated = false;
  constructor(
    private dealService: DealService,
    private productService: ProductService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
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
      console.log(this.deal);
    } else {
      // TODO: need to improve error handle.
      this.error = 'please fill out all parts';
      return;
    }
    this.dealService
      .createDeal(this.deal)
      .pipe(first())
      .subscribe(data => {
        this.isCreated = true;
        this.deal.clear();
      });
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
}
