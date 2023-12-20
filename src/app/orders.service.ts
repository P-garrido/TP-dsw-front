import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order} from './models/order';
import { Product } from './models/product';
import { LogInService } from './log-in.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient, private logInService: LogInService) { }
  token = this.logInService.token;
  
  loadAllOrders(): Observable<Order[]>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<Order[]>('http://localhost:1234/orders', {headers})
  }
  getProductById(idProd:number): Observable<Product>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<Product>(`http://localhost:1234/products/${idProd}`, {headers})
  }
  getProductsByIds(ids: number[]): Observable<Product[]>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<Product[]>(`http://localhost:1234/products/get_products`,{
      products: ids
    } ,{headers})
  }
  getProductByName(prodName:string): Observable<Product>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<Product>(`http://localhost:1234/products/nombre_producto/${prodName}`, {headers})
  }
}
