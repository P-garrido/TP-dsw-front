import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../models/product';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  productsList: Product[] = [];

  constructor(private prodService: ProductsService, private router: Router) {
    this.prodService.productToEdit = new Product('', '', '', 0, 0, 0, 0);
  }

  editProduct(productToEdit: Product) {
    this.prodService.productToEdit = productToEdit;
    this.redirect();
    
  }

  deleteProduct(productToDelete: Product) {
    this.prodService.deleteProduct(productToDelete.id_producto).subscribe();
    this.getAllProducts();
  }
  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts() {
    this.prodService.loadProducts().subscribe((response: any) => this.productsList = response)
  }
  redirect(){
    this.router.navigate(['/addProduct'])
  }
}
