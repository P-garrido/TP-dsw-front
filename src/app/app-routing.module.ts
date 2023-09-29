import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { LogInComponent } from './log-in/log-in.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'logIn', component: LogInComponent },
  { path: 'servicios', component: ServiciosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
