import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Product } from '../models/product';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
};
@Injectable()
export class ProductService {
  createUrl = 'http://192.168.1.86:8081/api/product/add'; // URL to web api
  tenUrl = 'http://192.168.1.86:8081/api/product/findten';
  allUrl = 'http://192.168.1.86:8081/api/product/find';
  NameIdUrl = 'http://192.168.1.86:8081/api/product/NameId';
  // NameUrl = 'http://192.168.1.119:8081/api/product/name';
  constructor(private http: HttpClient) {}

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.createUrl, product, httpOptions);
  }

  tenProduct(creator: string): Observable<string> {
    const creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.tenUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }

  allProduct(creator: string): Observable<string> {
    const creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.allUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }

  productNameId(creator: string): Observable<string> {
    const creatorJSON = '{ "creator" : ' + '"' + creator + '"' + ' }';

    // console.log(JSON.parse(creator));
    return this.http.post<string>(
      this.NameIdUrl,
      JSON.parse(creatorJSON),
      httpOptions
    );
  }

  // productName(id: number): Observable<string> {
  //   const creatorJSON = '{ "id" : ' + '"' + id + '"' + ' }';

  //   // console.log(JSON.parse(creator));
  //   return this.http.post<string>(
  //     this.NameUrl,
  //     JSON.parse(creatorJSON),
  //     httpOptions
  //   );
  // }
}
