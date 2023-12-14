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