import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductComponent } from '../new-product/new-product.component';
import { AdminProductsComponent } from '../admin-products/admin-products.component';
import { AdminProductItemComponent } from '../admin-product-item/admin-product-item.component';
import { NewServiceComponent } from '../new-service/new-service.component';
import { ServiciosContratadosComponent } from '../servicios-contratados/servicios-contratados.component';
import { ServContratadoComponent } from '../serv-contratado/serv-contratado.component';
import { SucursalesComponent } from '../sucursales/sucursales.component';
import { SucursalModalComponent } from '../sucursal-modal/sucursal-modal.component';
import { AdminServicesComponent } from '../admin-services/admin-services.component';
import { AdminServiceItemComponent } from '../admin-service-item/admin-service-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';




@NgModule({
  declarations: [
    NewProductComponent,
    AdminProductsComponent,
    AdminProductItemComponent,
    NewServiceComponent,
    ServiciosContratadosComponent,
    ServContratadoComponent,
    SucursalesComponent,
    SucursalModalComponent,
    AdminServicesComponent,
    AdminServiceItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    MdbFormsModule,
  ],
  exports: [
    NewProductComponent,
    AdminProductsComponent,
    AdminProductItemComponent,
    NewServiceComponent,
    ServiciosContratadosComponent,
    ServContratadoComponent,
    SucursalesComponent,
    SucursalModalComponent,
    AdminServicesComponent,
    AdminServiceItemComponent
  ]
})
export class AdminModule { }
