import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { LogInComponent } from './log-in/log-in.component';
import { CartComponent } from './cart/cart.component';
import { UsersComponent } from './users/users.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'logIn', component: LogInComponent},
  {path: 'cart', component: CartComponent},
  {path: 'usuarios', component: UsersComponent},
  {path: 'registrarse', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
