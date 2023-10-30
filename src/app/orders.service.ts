import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  loadAllOrders(){
    return this.http.get('http://localhost:1234/orders')
  }
  getProductById(idProd:number){
    return this.http.get(`http://localhost:1234/products/${idProd}`)
  }
  getProductByName(prodName:string){
    return this.http.get(`http://localhost:1234/products/nombre_producto/${prodName}`)
  }
}
