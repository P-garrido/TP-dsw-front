import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly baseUrl = 'http://localhost:1234/users'
  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(this.baseUrl)
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

  editUser(obj: Object, userId: number){
    const headers = { 'content-type': 'application/json'}
    const url = this.baseUrl + '/' + userId.toString()
    console.log(obj)
    console.log(url)
    return this.http.patch(url, JSON.stringify(obj), {'headers':headers})
  }
}
