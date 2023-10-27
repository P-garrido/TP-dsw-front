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

}
