import { FormControl } from "@angular/forms";

export class EditBoughtService {
  idService?: number;
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