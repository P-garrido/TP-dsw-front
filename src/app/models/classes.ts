import { NonNullableFormBuilder } from "@angular/forms";
import { ArgumentOutOfRangeError } from "rxjs";

export class Product {

  id_producto: number;
  imagen: any;
  nombre_producto: string;
  desc_producto: string;
  precio: number;
  amount: number;
  stock: number;

  constructor(img: any, name: string, desc: string, pr: number, am: number, stock:number, id_producto:number) {
    this.id_producto = id_producto;
    this.imagen = img;
    this.nombre_producto = name;
    this.desc_producto = desc;
    this.precio = pr;
    this.stock = stock
    this.amount = am
  }
}


export class Service {

  name: string;
  description: string;
  prize: number;

  constructor(name: string, desc: string, pr: number) {
    this.name = name;
    this.description = desc;
    this.prize = pr;
  }
}

export class User {
  id_usuario: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  adress: string;
  phone: string;
  type: number;

  constructor(idUs: number, usNam: string, pass: string, fNam: string, lNam: string, ad: string, ph: string, type: number) {
    this.id_usuario = idUs;
    this.username = usNam;
    this.password = pass;
    this.firstName = fNam;
    this.lastName = lNam;
    this.adress = ad;
    this.phone = ph;
    this.type = type;
  }
}

export class Order {
  id_pedido: number;
  fecha: string;
  id_cliente: number;
  total: number;
  productos_pedidos: Product[] ;

  constructor(idUs: number, fecha: string, tot: number, idCli: number) {
    this.id_pedido = idUs;
    this.fecha = fecha;
    this.total = tot;
    this.productos_pedidos = [];
    this.id_cliente = idCli;
  }
}
