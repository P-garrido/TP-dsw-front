import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { FormControl } from '@angular/forms';
import { Order} from '../models/order';
import { Product } from '../models/product';
import { delay, finalize } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  loading: boolean = true;
  orders: Order[] = []
  filteredOrders: Order[] = [];
  searchForm = new FormControl();
  constructor(private ordersService: OrdersService){}

  ngOnInit(): void {
    this.getAllOrders();
  }
  getAllOrders(){
    this.ordersService.loadAllOrders().pipe( delay(1000),finalize(()=> this.loading=false)).subscribe((response: Order[]) => {
      this.orders = response;
      this.filteredOrders = response;
    });
  }
  getOrderByProduct(){
    this.ordersService.getProductByName(this.searchForm.value).subscribe((response:Product) => {
      this.filteredOrders = this.orders.filter((o:any) => {
        for (let prod of o.productos_pedidos){
          if(prod.id_producto === response.id_producto) return prod
        }
      })
    });
  }
}


