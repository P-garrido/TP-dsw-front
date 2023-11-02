
import { NonNullableFormBuilder } from "@angular/forms";
import { FormControl, FormGroup } from "@angular/forms";
import { ArgumentOutOfRangeError } from "rxjs";


export class Product {

  id_producto: number;
  imagen: any;
  nombre_producto: string;
  desc_producto: string;
  precio: number;
  amount: number;
  stock: number;

  constructor(img: any, name: string, desc: string, pr: number, am: number, stock: number, id_producto: number) {
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

  id: number;
  description: string;
  price: number;
  longDescription: string;

  constructor(id: number, desc: string, pr: number, longDesc: string) {
    this.id = id;
    this.description = desc;
    this.price = pr;
    this.longDescription = longDesc;
  }
}

export class EditServiceEvent {
  id: number;
  data: FormGroup;

  constructor(id: number, fc: FormGroup) {
    this.id = id;
    this.data = fc;
  }
}

export class BoughtService {
  service: Service
  user: User;
  serviceDate: Date;
  hourAmmount: number;
  clientMsj: string;

  constructor(serv: Service, us: User, servDate: Date, hourAm: number, cliMsj: string) {
    this.service = serv;
    this.user = us;
    this.serviceDate = servDate;
    this.hourAmmount = hourAm;
    this.clientMsj = cliMsj;
  }
}

export class EditBoughtService {
  idService: number;
  idUser: number;
  serviceDate: Date;
  hourAmmount: FormControl;

  constructor(idServ: number, idUs: number, servDate: Date, hourAm: FormControl) {
    this.idService = idServ;
    this.idUser = idUs;
    this.serviceDate = servDate;
    this.hourAmmount = hourAm;
  }
}



export class User {
  idUser: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  adress: string;
  phone: string;
  type: number;
  email: string;


  constructor(idUs: number, usNam: string, pass: string, fNam: string, lNam: string, ad: string, ph: string, type: number, em: string) {
    this.idUser = idUs;
    this.userName = usNam;
    this.password = pass;
    this.firstName = fNam;
    this.lastName = lNam;
    this.adress = ad;
    this.phone = ph;
    this.type = type;
    this.email = em;
  }

}

export class Order {
  id_pedido: number;
  fecha: string;
  id_cliente: number;
  total: number;
  productos_pedidos: Product[];

  constructor(idUs: number, fecha: string, tot: number, idCli: number) {
    this.id_pedido = idUs;
    this.fecha = fecha;
    this.total = tot;
    this.productos_pedidos = [];
    this.id_cliente = idCli;
  }
}

