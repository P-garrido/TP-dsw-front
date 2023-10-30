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
export class ProductosComponent implements OnInit {

  filteredProducts: Product[] = [];
  products: Product[] = [];

  admin: boolean | undefined;

  searchForm = new FormControl();

  constructor(private cartService: CartService, public productService: ProductsService, private logInService: LogInService) {

    this.searchForm.valueChanges.subscribe(value => {
      console.log(value);
      this.filteredProducts = this.products.filter((p: Product) => p.nombre_producto.toLowerCase().includes(value.toLowerCase()))
    });


    if (logInService.user.type === 1) this.admin = true;
    else this.admin = false;


  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.loadProducts().subscribe((resp: any) => {
      this.filteredProducts = resp;
      this.products = resp;
      console.log(this.products)
    });
  }

  addToCart(pr: Product) {
    this.cartService.addProduct(pr);
  }

}
