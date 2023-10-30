import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { LogInComponent } from './log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { UsersComponent } from './users/users.component';
import { SignUpComponent } from './sign-up/sign-up.component'
import { NewProductComponent } from './new-product/new-product.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { AdminProductItemComponent } from './admin-product-item/admin-product-item.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FooterComponent } from './footer/footer.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { ServiceComponent } from './service/service.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ServiciosContratadosComponent } from './servicios-contratados/servicios-contratados.component';
import { ServContratadoComponent } from './serv-contratado/serv-contratado.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    ProductosComponent,
    LogInComponent,
    CartComponent,
    UsersComponent,
    SignUpComponent,
    NewProductComponent,
    AdminProductsComponent,
    ProductItemComponent,
    CartProductComponent,
    OrdersComponent,
    OrderItemComponent,
    AdminProductItemComponent,
    FooterComponent,
    ServiciosComponent,
    NewServiceComponent,
    ServiceComponent,
    ServiciosContratadosComponent,
    ServContratadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
