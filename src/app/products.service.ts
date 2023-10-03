import { Injectable } from '@angular/core';
import { Product } from './models/classes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Product []= [];
  constructor(private http: HttpClient) {
  }

  loadProducts(){
      this.http.get("http://localhost:1234/products").subscribe((resp: any) => {
      console.log(resp.length);
      this.products = resp;
      console.log(this.products);
    })
  }

  createProduct(name:any, desc:string, stock: any, price:any, img:string){
      return  this.http.post("http://localhost:1234/products", 
    {
      nombre_producto: name,
      desc_producto: desc,
      stock: stock,
      precio: price,
      imagen: img
    })

  }
}
