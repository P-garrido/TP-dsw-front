export class Service {

  id?: number;
  description: string;
  hourValue: number;
  longDescription: string;

  constructor(id: number, desc: string, pr: number, longDesc: string) {
    this.id = id;
    this.description = desc;
    this.hourValue = pr;
    this.longDescription = longDesc;
  }
}