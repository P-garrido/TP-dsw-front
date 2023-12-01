import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from '../app-routing.module';
import { CartComponent } from './cart.component';
import { CartProductComponent } from '../cart-product/cart-product.component';
import { ProductosComponent } from '../productos/productos.component';
import { OrdersComponent } from '../orders/orders.component';
import { ServiciosComponent } from '../servicios/servicios.component';
import { OrderItemComponent } from '../order-item/order-item.component';
import { OffcanvasCartComponent } from '../offcanvas-cart/offcanvas-cart.component';
import { ServiceComponent } from '../service/service.component';
import { ProductItemComponent } from '../product-item/product-item.component';



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
