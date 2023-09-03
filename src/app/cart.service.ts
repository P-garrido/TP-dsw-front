import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts:any = [];
  constructor() { }

  addProduct(pr:any){
    if(!this.cartProducts.includes(pr)){
      pr.amount = 1;
      this.cartProducts.push(pr);
      console.log(this.cartProducts)
    }
  }
  removeProduct(pr:any){
    this.cartProducts = this.cartProducts.filter((p:any) => p !== pr)
  }
}
