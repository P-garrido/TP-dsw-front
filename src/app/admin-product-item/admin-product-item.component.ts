import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-admin-product-item',
  templateUrl: './admin-product-item.component.html',
  styleUrls: ['./admin-product-item.component.scss']
})
export class AdminProductItemComponent {
  @Input() product: any = {};
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  editProduct(prod:any){
    this.edit.emit(prod);
  }
  deleteProduct(prod:any){
    this.delete.emit(prod);
  }
}
