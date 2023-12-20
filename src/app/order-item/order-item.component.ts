import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  @Input() order:any = {}
  products: any = [];
  @Output() emitProducts = new EventEmitter();
  constructor(private orderService: OrdersService){}

  ngOnInit(): void {

  this.orderService.getProductsByIds(this.order.productos_pedidos).subscribe((resp:Product[]) => {
    this.products = resp;
  })
  }
}
