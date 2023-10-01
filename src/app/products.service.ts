import { Injectable } from '@angular/core';
import { Product } from './models/classes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Product []= [];
  constructor(private http: HttpClient) {
    this.http.get("http://localhost:1234/products").subscribe((resp: any) => {
      console.log(resp.length);
      this.products = resp;
      console.log(this.products);
    })
  }
}
