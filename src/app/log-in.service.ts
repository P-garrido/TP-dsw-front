import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/classes';
@Injectable({
  providedIn: 'root'
})
export class LogInService {

  obj:User = {
    id: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    adress: '',
    phone: '',
    type: 0,
    email: ''
  }

  constructor(private http: HttpClient) {}
  // async 
  getOne(user:string, pass:number){
    return this.http.get(`http://localhost:3000/api/employees/${user}/${pass}`)
  }
}
