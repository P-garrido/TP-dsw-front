import {Service} from './service'
import {User} from './user'

export class BoughtService {
  service: Service
  user: User;
  serviceDate: Date;
  hourAmmount: number;
  clientMessage: string;

  constructor(service: Service, user: User, serviceDate: Date, hourAmount: number, clientMessage: string) {
    this.service = service;
    this.user = user;
    this.serviceDate = serviceDate;
    this.hourAmmount = hourAmount;
    this.clientMessage = clientMessage;
  }
}