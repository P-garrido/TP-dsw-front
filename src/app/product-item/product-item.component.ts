import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/classes';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {


  @Input() product: Product = {
    id_producto: 0,
    imagen: undefined,
    nombre_producto: '',
    desc_producto: '',
    precio: 0,
    amount: 0,
    stock: 0
  };
  @Output() addToCart = new EventEmitter();

  addButton(pr:Product){
    this.addToCart.emit(pr);

  }

}

