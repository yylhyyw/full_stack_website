import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AuthenticationService } from '../services/authentication.service';
import { Product } from '../models/product';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService, AuthenticationService]
})
export class ProductsComponent implements OnInit {
  public product = new Product('', '', '', '', '', '', '', '');

  // public debug: any;

  private isCreated = false;

  constructor(
    private productService: ProductService,
    private authenticationSerive: AuthenticationService
  ) {}

  ngOnInit() {
    if (this.authenticationSerive.currentUserValue) {
      this.product.creator = this.authenticationSerive.currentUserValue[0];
    } else {
      // TODO: handle no user error
    }
  }

  create() {
    this.productService
      .createProduct(this.product)
      .pipe(first())
      .subscribe(data => {
        console.log(data);
        this.isCreated = true;
        this.product.clear();
      });
  }
}
