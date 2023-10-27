import { Injectable } from '@angular/core';
import { Product } from './models/classes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Product []= [];

  productToEdit: Product = {
    id_producto: 0,
    imagen: '',
    nombre_producto: '',
    desc_producto: '',
    precio: 0,
    amount: 0,
    stock: 0
  };
  constructor(private http: HttpClient) {
  }

  editProduct(id: number, name:any, desc:string, stock: any, price:any, img:string){
    return this.http.patch("http://localhost:1234/products", 
    {
      id_producto: id,
      nombre_producto: name,
      desc_producto: desc,
      stock: stock,
      precio: price,
      imagen: img
    })
  }

  loadProducts(){
      return this.http.get("http://localhost:1234/products")
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

  deleteProduct(idProd:number){
    return this.http.delete("http://localhost:1234/products/" + idProd.toString())
  }
}
