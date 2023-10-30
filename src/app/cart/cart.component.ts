import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/classes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  
  constructor(public cartService: CartService){}

  addOne(pr:Product){
    pr.amount ++;
    console.log(pr)
  }
  substractOne(pr:Product){
    if(pr.amount > 1){
      pr.amount --;
    }
    console.log(pr)
  }
  removeOne(pr:Product){
    this.cartService.removeProduct(pr);
    console.log(this.cartService.cartProducts)
  }
}

