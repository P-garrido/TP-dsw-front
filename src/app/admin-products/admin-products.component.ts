import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../models/classes';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit{

  productsList:any =[];

  constructor(private prodService: ProductsService){}

  deleteProduct(product:Product){
    this.prodService.deleteProduct(product.id_producto).subscribe();
    console.log(product);
    this.getAllProducts();
  }
  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts(){
    this.prodService.loadProducts().subscribe(resp => this.productsList = resp)
  }
}
