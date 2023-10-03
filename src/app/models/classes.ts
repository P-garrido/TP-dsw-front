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
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  adress: string;
  phone: string;
  type: number;

  constructor(usNam: string, pass: string, fNam: string, lNam: string, ad: string, ph: string, type: number) {
    this.username = usNam;
    this.password = pass;
    this.firstName = fNam;
    this.lastName = lNam;
    this.adress = ad;
    this.phone = ph;
    this.type = type;
  }
}
