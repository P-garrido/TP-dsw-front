import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LogInService {

  obj:any = {
    username: '',
    password: ''
  }

  constructor(private http: HttpClient) {}
  // async 
  getOne(user:string, pass:number){
    return this.http.get(`http://localhost:3000/api/employees/${user}/${pass}`)
  }
}
