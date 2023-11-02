import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './models/classes';
import { catchError, throwError } from 'rxjs';
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
    return this.http.post<any>(this.baseUrl, {
      nombre_usuario: user,
      clave: pass
    }).pipe(catchError(this.handleError))
  }

    private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      alert('Nombre de usuario o contrasena incorrectos');
    } else {
      console.error('Ocurrió un error inesperado:', error.message);
    }

    return throwError(() => new Error('Ocurrio un error'));
  }
}
