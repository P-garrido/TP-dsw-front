import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormControl } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Product } from '../models/product';
import { LogInService } from '../log-in.service';
import { delay, finalize } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  products: Product[] = [];
  loading: boolean = true;
  admin: boolean | undefined;

  searchForm = new FormControl();

  constructor(private cartService: CartService, public productService: ProductsService, private logInService: LogInService) {
    if (logInService.user.type === 1) this.admin = true;
    else this.admin = false;
  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.loading = true;
    this.productService.loadProducts().pipe( delay(1000),finalize(()=> this.loading=false)).subscribe((response: Product[]) => {

      this.products = response;

      this.products.forEach(prod => {
        this.productService.getImage(prod.id_producto)
        .then(resp => resp.blob())
        .then((blob:any) => {
          const urlImg = URL.createObjectURL(blob);
          prod.imagen = urlImg;
        })
      });
    });
  }

  addToCart(pr: Product) {
    this.cartService.addProduct(pr);
  }

  filterProducts(){
    this.productService.getProductByDescription(this.searchForm.value).subscribe((response: Product[]) => {
      this.products = response;
      this.products.forEach(prod => {
          this.productService.getImage(prod.id_producto)
          .then(resp => resp.blob())
          .then((blob:any) => {
            const urlImg = URL.createObjectURL(blob);
            prod.imagen = urlImg;
          })
        });
    });
  }
}
