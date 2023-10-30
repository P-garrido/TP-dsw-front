import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/classes';
@Injectable({
  providedIn: 'root'
})
export class LogInService {


  constructor(private http: HttpClient) { }

  // async 

  readonly baseUrl = "http://localhost:1234/login";

  token: any = "";
  user: User = new User(-1, "", "", "", "", "", "", -1, "");



  getOne(user: string, pass: number) {
    this.http.post<any>(this.baseUrl, {
      nombre_usuario: user,
      clave: pass
    }).subscribe(res => {
      if (res.token) {
        this.token = res.token;
        this.user = new User(res.user.id_usuario, res.user.nombre_usuario, res.user.clave, res.user.nombre, res.user.apellido, res.user.direccion, res.user.telefono, res.user.tipo_usuario, res.user.email);
      }
    })
  }
}
