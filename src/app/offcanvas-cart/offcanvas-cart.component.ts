import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-offcanvas-cart',
  templateUrl: './offcanvas-cart.component.html',
  styleUrls: ['./offcanvas-cart.component.scss']
})
export class OffcanvasCartComponent {

  @Input() finishedOrder?: Boolean;
  @Input() total?: number;

  @Output() clear = new EventEmitter();
  @Output() completePurchase = new EventEmitter();
  constructor(public cartService: CartService){}

  clearCart(){
    this.clear.emit();
  }
  checkOut(){
    this.completePurchase.emit();
  }
}
