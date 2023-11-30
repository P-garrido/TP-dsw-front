import { Injectable } from '@angular/core';
import { Product } from './models/classes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Product []= [];

  productToEdit: Product = new Product('', '', '', 0,0 ,0 ,0); 
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

  getProductByDescription(description: string): Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:1234/products/desc_producto/${description}`);
  }

  loadProducts(): Observable<Product[]>{
      return this.http.get<Product[]>("http://localhost:1234/products")
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

  getImage(id: number){
    return fetch(`http://localhost:1234/images/${id}`);
  }

  uploadImg(fd: any){
    return this.http.post('http://localhost:1234/images/upload', fd)
  }
}
