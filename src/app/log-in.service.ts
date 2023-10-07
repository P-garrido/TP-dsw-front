import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/classes';
@Injectable({
  providedIn: 'root'
})
export class LogInService {

  obj:User = {
    id_usuario: 1,
    username: 's',
    password: '',
    firstName: '',
    lastName: '',
    adress: '',
    phone: '',
    type: 0
  }

  constructor(private http: HttpClient) {}
  // async 
  getOne(user:string, pass:number){
    return this.http.get(`http://localhost:3000/api/employees/${user}/${pass}`)
  }
}
