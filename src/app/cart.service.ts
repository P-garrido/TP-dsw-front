import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LogInService } from './log-in.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts:Product [] = [];
  alreadySelected: boolean =false;
  constructor(private http:HttpClient, private loginService: LogInService) { 
  }
  token = this.loginService.token;

  addProduct(productToAdd:Product){
    this.alreadySelected = false;
    for(let prod in this.cartProducts){
      if (this.cartProducts[prod].nombre_producto == productToAdd.nombre_producto) this.alreadySelected = true;
    }
    if(!this.cartProducts.includes(productToAdd) && this.alreadySelected===false){
      productToAdd.amount = 1;
      this.cartProducts.push(productToAdd);
    }
  }
  removeProduct(productToRemove:Product){
    this.cartProducts = this.cartProducts.filter((p:Product) => p !== productToRemove)
  }

  addToOrder(orderId:number, idProd: number, cant: number){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post('http://localhost:1234/order/products',
    {      
      id_pedido: orderId,
      id_producto: idProd,
      cantidad: cant
    }, {headers}
    );
  }

    updateStock(idProd: number, cant: number){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.patch(`http://localhost:1234/products/${idProd}`, 
    {
      cantidad: cant
    }, {headers})
  }

  createOrder(idUs: number, tot: number){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post('http://localhost:1234/orders',
    {
      id_cliente: idUs,
      total: tot
    }, {headers}
    );
  }
}
