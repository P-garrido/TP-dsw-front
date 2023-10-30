import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrdersService } from '../orders.service';

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
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   for (let prod of this.order.productos_pedidos){
    this.orderService.getProductById(prod.id_producto).subscribe((resp:any) => {
      this.products.push({
        nombre_producto: resp.nombre_producto,
        cantidad: prod.cantidad
      });
    });
   } 
  }
}
