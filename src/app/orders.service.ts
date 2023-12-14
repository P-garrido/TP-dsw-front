import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order} from './models/order';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  loadAllOrders(): Observable<Order[]>{
    return this.http.get<Order[]>('http://localhost:1234/orders')
  }
  getProductById(idProd:number): Observable<Product>{
    return this.http.get<Product>(`http://localhost:1234/products/${idProd}`)
  }
  getProductByName(prodName:string): Observable<Product>{
    return this.http.get<Product>(`http://localhost:1234/products/nombre_producto/${prodName}`)
  }
}
