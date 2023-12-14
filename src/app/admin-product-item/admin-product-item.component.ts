import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-admin-product-item',
  templateUrl: './admin-product-item.component.html',
  styleUrls: ['./admin-product-item.component.scss']
})
export class AdminProductItemComponent {
  @Input() product: any = {};
  @Output() edit = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<Product>();

  editProduct(productToEdit:Product){
    this.edit.emit(productToEdit);
  }
  deleteProduct(productToDelete:Product){
    this.delete.emit(productToDelete);
  }
}
