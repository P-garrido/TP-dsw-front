import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts:any = [];
  constructor() { }

  addProduct(pr:any){
    pr.amount = 1;
    this.cartProducts.push(pr);
    console.log(this.cartProducts)
  }
}
