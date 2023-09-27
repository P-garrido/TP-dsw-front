import { Injectable } from '@angular/core';
import { Product } from './models/classes';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts:Product [] = [];
  constructor() { }

  addProduct(pr:Product){
    if(!this.cartProducts.includes(pr)){
      this.cartProducts.push(pr);
      console.log(this.cartProducts)
    }
  }
  removeProduct(pr:Product){
    this.cartProducts = this.cartProducts.filter((p:Product) => p !== pr)
  }
}
