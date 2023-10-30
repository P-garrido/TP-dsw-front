import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: any = []
  filteredOrders: any = [];
  searchForm = new FormControl();
  constructor(private ordersService: OrdersService){}

  ngOnInit(): void {
    this.getAllOrders();
  }
  getAllOrders(){
    this.ordersService.loadAllOrders().subscribe(resp => {
      this.orders = resp;
      this.filteredOrders = resp;
    });
  }
  getOrderByProduct(){
    this.ordersService.getProductByName(this.searchForm.value).subscribe((resp:any) => {
      this.filteredOrders = this.orders.filter((o:any) => {
        for (let prod of o.productos_pedidos){
          if(prod.id_producto === resp.id_producto) return prod
        }
      })
    });
  }
}
