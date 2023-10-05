import { Injectable } from '@angular/core';
import { Product } from './models/classes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts:Product [] = [];
  constructor(private http:HttpClient) { }

  addProduct(pr:Product){
    if(!this.cartProducts.includes(pr)){
      pr.amount = 1;
      this.cartProducts.push(pr);
      console.log(this.cartProducts)
    }
  }
  removeProduct(pr:Product){
    this.cartProducts = this.cartProducts.filter((p:Product) => p !== pr)
  }

  addToOrder(orderId:number, idProd: number, cant: number){
    return this.http.post('productos_pedidos',
    {
      id_producto: idProd,
      id_pedido: orderId,
      cantidad: cant
    }
    );
  }

  createOrder(idUs: number, tot: number){
    return this.http.post('pedidos',
    {
      id_usuario: idUs,
      total: tot
    }
    );
  }
}
