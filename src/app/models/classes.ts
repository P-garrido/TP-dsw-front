import { FormControl, FormGroup } from "@angular/forms";

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
  idService: number;
  idUser: number;
  serviceDate: Date;
  hourAmmount: number;
  clientMsj: string;

  constructor(idServ: number, idUs: number, servDate: Date, hourAm: number, cliMsj: string) {
    this.idService = idServ;
    this.idUser = idUs;
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

  constructor(idUs: number, usNam: string, pass: string, fNam: string, lNam: string, ad: string, ph: string, type: number) {
    this.idUser = idUs;
    this.userName = usNam;
    this.password = pass;
    this.firstName = fNam;
    this.lastName = lNam;
    this.adress = ad;
    this.phone = ph;
    this.type = type;
  }
} 