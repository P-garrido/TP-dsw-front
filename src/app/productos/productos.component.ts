import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormControl } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Product } from '../models/classes';
import { LogInService } from '../log-in.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent{

filteredProducts: Product [] = this.productService.products;

admin: boolean | undefined;

searchForm = new FormControl();

constructor(private cartService: CartService, public productService: ProductsService, private logInService: LogInService){
  this.productService.loadProducts();

  this.searchForm.valueChanges.subscribe(value => {
    console.log(value);
    this.filteredProducts = this.productService.products.filter((p:Product) => p.nombre_producto.toLowerCase().includes(value.toLowerCase()))
  });

  console.log(this.productService.products);

  if(logInService.obj.type === 0) this.admin = true;
  else this.admin = false;
  
  

}


  addToCart(pr:Product){
    this.cartService.addProduct(pr);
  }
  
}
