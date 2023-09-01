import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormControl } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

filteredProducts:any = this.productService.products;


searchForm = new FormControl();

constructor(private cartService: CartService, public productService: ProductsService){
  this.searchForm.valueChanges.subscribe(value => {
    console.log(value);
    this.filteredProducts = this.productService.products.filter((p:any) => p.name.toLowerCase().includes(value.toLowerCase()))
  })
}

  addToCart(pr:any){
    this.cartService.addProduct(pr);
  }

}
