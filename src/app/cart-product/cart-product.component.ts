import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/classes';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent {

  @Input() product!: Product;
  @Output() remove = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() substract = new EventEmitter();

  buttonSubstract(pr:Product){
    this.substract.emit(pr)
  }
  buttonAdd(pr:Product){
    this.add.emit(pr)
  } 
  buttonRemove(pr:Product){
    this.remove.emit(pr)
  }
}
