import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/classes.js';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly baseUrl = 'http://localhost:1234/users'
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl)
  }

  deleteUser(userId: number){
    const url = this.baseUrl + '/' + userId.toString()
    return this.http.delete(url)
  }

  addUser(obj: object){
    const headers = { 'content-type': 'application/json'}
    return this.http.post(this.baseUrl, JSON.stringify(obj), {'headers':headers})
  }

  getUser(userId: number){
    const url = '/' + userId.toString()
    return this.http.get(this.baseUrl + url)
  }

  editUser(object: Object, userId: number){
    const headers = { 'content-type': 'application/json'}
    const url = this.baseUrl + '/' + userId.toString()
    return this.http.patch(url, JSON.stringify(object), {'headers':headers})
  }
}
