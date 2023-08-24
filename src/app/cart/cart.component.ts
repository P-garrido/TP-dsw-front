import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(public cartService: CartService){}

  addOne(pr:any){
    pr.amount ++;
    console.log(pr)
  }
  substractOne(pr:any){
    if(pr.amount > 1){
      pr.amount --;
    }
    console.log(pr)

  }
}

