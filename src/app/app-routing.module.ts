import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { LogInComponent } from './log-in/log-in.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { ServiciosContratadosComponent } from './servicios-contratados/servicios-contratados.component';
import { CartComponent } from './cart/cart.component';
import { NewProductComponent } from './new-product/new-product.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [

  {path: 'inicio', component: InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'logIn', component: LogInComponent},
  {path: 'cart', component: CartComponent},
  {path: 'addProduct', component: NewProductComponent},
  {path: 'adminProducts', component: AdminProductsComponent},
  {path: 'orders', component: OrdersComponent},
  { path: 'servicios', component: ServiciosComponent },
  { path: 'addService', component: NewServiceComponent },
  { path: 'servicios-contratados', component: ServiciosContratadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
