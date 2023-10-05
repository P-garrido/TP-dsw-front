import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/classes';
import { ProductsService } from '../products.service';
import { LogInService } from '../log-in.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  total:number = 0;
  orderId: number = 0;
  constructor(public cartService: CartService, private logInServie: LogInService){
    this.updateTotal();
  }

  addOne(pr:Product){
    pr.amount ++;
    console.log(pr)
    this.total = 0;
    this.updateTotal();
  }
  substractOne(pr:Product){
    if(pr.amount > 1){
      pr.amount --;
      this.total = 0;
      this.updateTotal();
    }
    console.log(pr)
  }
  removeOne(pr:Product){
    this.cartService.removeProduct(pr);
    console.log(this.cartService.cartProducts)
    this.total = 0;
    this.updateTotal();
  }
  updateTotal(){
    for (let prod of this.cartService.cartProducts){
      this.total = parseFloat(this.total.toString()) + (parseFloat(prod.precio.toString())* (prod.amount));
    }
  }
  clearCart(){
    this.total = 0;
    this.cartService.cartProducts = [];
  }
  checkOut(){

    try{
    this.cartService.createOrder(this.logInServie.obj.id_usuario, this.total).subscribe((resp:any) => this.orderId = resp.id_pedido);

    for (let prod of this.cartService.cartProducts){
      this.cartService.addToOrder(this.orderId, prod.id_producto, prod.amount).subscribe();
    }
    }catch(e){
      console.log(e);
    }
  }
}

