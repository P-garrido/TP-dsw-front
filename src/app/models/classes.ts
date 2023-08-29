export class Product {

  image: any;
  name: string;
  description: string;
  prize: number;


  constructor(img: any, name: string, desc: string, pr: number) {
    this.image = img;
    this.name = name;
    this.description = desc;
    this.prize = pr;
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
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  adress: string;
  phone: string;
  type: number;

  constructor(usNam: string, pass: string, fNam: string, lNam: string, ad: string, ph: string, type: number) {
    this.userName = usNam;
    this.password = pass;
    this.firstName = fNam;
    this.lastName = lNam;
    this.adress = ad;
    this.phone = ph;
    this.type = type;
  }
}