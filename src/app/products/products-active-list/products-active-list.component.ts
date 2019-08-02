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
  public selectProduct = new Product(
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  );
  public isUpdate = false;
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
  editProductSelect(i) {
    console.log(i);
    if (i >= 0) {
      this.selectProduct.id = this.activeProductsList[i].id;
      this.selectProduct.name = this.activeProductsList[i].name;
      this.selectProduct.condition = this.activeProductsList[
        i
      ].product_condition;
      this.selectProduct.msrp = this.activeProductsList[i].msrp;
      this.selectProduct.asin = this.activeProductsList[i].asin;
      this.selectProduct.upc = this.activeProductsList[i].upc;
      this.selectProduct.weight = this.activeProductsList[i].weight;
      this.selectProduct.note = this.activeProductsList[i].note;
      this.selectProduct.creator = this.activeProductsList[i].creator;
      this.selectProduct.link = this.activeProductsList[i].link;
    }
  }
  update() {
    this.productService
      .updateProduct(this.selectProduct)
      .pipe(first())
      .subscribe(
        data => {
          this.isUpdate = true;
        },
        error => {
          console.log(error);
        },
        () => {
          this.ngOnInit();
          this.selectProduct.clear();
        }
      );
  }
}
