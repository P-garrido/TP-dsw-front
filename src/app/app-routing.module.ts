import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { LogInComponent } from './log-in/log-in.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { ServiciosContratadosComponent } from './servicios-contratados/servicios-contratados.component';
import { CartComponent } from './cart/cart.component';
import { UsersComponent } from './users/users.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NewProductComponent } from './new-product/new-product.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { OrdersComponent } from './orders/orders.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { AdminServicesComponent } from './admin-services/admin-services.component';

const routes: Routes = [

  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'logIn', component: LogInComponent },
  { path: 'cart', component: CartComponent },
  { path: 'usuarios', component: UsersComponent },
  { path: 'registrarse', component: SignUpComponent },
  { path: 'addProduct', component: NewProductComponent },
  { path: 'adminProducts', component: AdminProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'addService', component: NewServiceComponent },
  { path: 'servicios-contratados', component: ServiciosContratadosComponent },
  { path: '', component: InicioComponent },
  { path: 'sucursales', component: SucursalesComponent },
  { path: 'adminServices', component: AdminServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
