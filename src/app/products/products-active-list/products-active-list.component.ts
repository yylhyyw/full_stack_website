import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { AuthenticationService } from '../../services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-products-active-list',
  templateUrl: './products-active-list.component.html',
  styleUrls: ['./products-active-list.component.scss'],
  providers: [ProductService, AuthenticationService]
})
export class ProductsActiveListComponent implements OnInit {
  private userEmail: string;
  public activeProductsList: any;
  constructor(
    private productService: ProductService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.getActiveList();
  }

  getActiveList() {
    if (this.authenticationService.currentUserValue) {
      this.userEmail = this.authenticationService.currentUserValue[0];
      // this.userEmail = 'admin';
    } else {
      // TODO: add no userEmail error
    }
    this.productService
      .tenProduct(this.userEmail)
      .pipe(first())
      .subscribe(data => {
        this.activeProductsList = data;
      });
  }
}
