import { ArgumentOutOfRangeError } from "rxjs";

export class Product {

  image: any;
  name: string;
  description: string;
  price: number;
  amount: number;

  constructor(img: any, name: string, desc: string, pr: number, am: number) {
    this.image = img;
    this.name = name;
    this.description = desc;
    this.price = pr;
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
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  adress: string;
  phone: string;
  type: number;
  email: string;

  constructor(id: number,usNam: string, pass: string, fNam: string, lNam: string, ad: string, ph: string, type: number, em: string) {
    this.id = id;
    this.username = usNam;
    this.password = pass;
    this.firstName = fNam;
    this.lastName = lNam;
    this.adress = ad;
    this.phone = ph;
    this.type = type;
    this.email = em;
  }
}
