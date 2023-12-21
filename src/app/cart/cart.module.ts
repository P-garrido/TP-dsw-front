import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CartComponent } from './cart.component';
import { CartProductComponent } from '../cart-product/cart-product.component';
import { ProductosComponent } from '../productos/productos.component';
import { OrdersComponent } from '../orders/orders.component';
import { ServiciosComponent } from '../servicios/servicios.component';
import { OrderItemComponent } from '../order-item/order-item.component';
import { OffcanvasCartComponent } from '../offcanvas-cart/offcanvas-cart.component';
import { ServiceComponent } from '../service/service.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProductosComponent,
    CartComponent,
    CartProductComponent,
    OrdersComponent,
    OrderItemComponent,
    ServiciosComponent,
    OffcanvasCartComponent,
    ServiceComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    AccordionModule.forRoot(),
    AppRoutingModule
  ],
  exports: [
    ProductosComponent,
    CartComponent,
    CartProductComponent,
    OrdersComponent,
    OrderItemComponent,
    ServiciosComponent,
    OffcanvasCartComponent,
    ServiceComponent,
    ProductItemComponent
  ]
})
export class CartModule { }
