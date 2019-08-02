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
  public product = new Product(null, 'New', null, '', '', '', '', '');

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
        window.location.reload();
        this.product.clear();
      });
  }
  search() {
    // Declare variables
    const input = document.getElementById('productSearchInput') as HTMLInputElement;
    const filter = input.value.toUpperCase();
    const table = document.getElementById('productTable');
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
