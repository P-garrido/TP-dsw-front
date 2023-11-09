import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BoughtService, EditBoughtService, EditServiceEvent, Service } from './models/classes';
import { FormGroup } from '@angular/forms';
import { LogInService } from './log-in.service';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient, private loginService: LogInService) {

  }



  readonly baseUrl = "http://localhost:1234/services";
  readonly buyBaseUrl = "http://localhost:1234/services-clients";



  getAllServices() {
    return this.http.get<any>(this.baseUrl);
  }
  getAllBoughtServices() {
    const token = this.loginService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.buyBaseUrl, { headers });
  }

  addService(fg: FormGroup) {
    const token = this.loginService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(this.baseUrl, {
      description: fg.value.description,
      hourValue: parseInt(fg.value.price),
      longDescription: fg.value.longDescription
    }, { headers });
  }

  deleteService(idServ: number) {
    const url = this.baseUrl + `/${idServ}`;
    const token = this.loginService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(url, { headers });
  }

  editService(serv: EditServiceEvent) {
    const url = this.baseUrl + `/${serv.id}`;
    const token = this.loginService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch<any>(url, {
      description: serv.data.value.description,
      hourValue: parseInt(serv.data.value.price),
      longDescription: serv.data.value.longDesc
    }, { headers });
  }

  buyService(serv: EditServiceEvent, idUser: number) {
    const url = this.buyBaseUrl;
    const token = this.loginService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(url, {
      idCli: idUser,
      idServ: serv.id,
      date: serv.data.value.date,
      hourAmmount: null,
      clientMsg: serv.data.value.message
    },
      { headers }).pipe(catchError(this.handleError))
  }

  editServiceClient(servCli: EditBoughtService) {
    const url = this.buyBaseUrl + `/${servCli.idService}/${servCli.idUser}/${servCli.serviceDate}`;
    const token = this.loginService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch<any>(url, {
      hourAmmount: parseInt(servCli.hourAmmount.value)
    }, { headers }).pipe(catchError(this.handleError));
  }

  deleteServiceClient(idServ: number, idCli: number, servDate: Date) {
    const url = this.buyBaseUrl + `/${idServ}/${idCli}/${servDate}`;
    const token = this.loginService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(url, { headers });

  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      return throwError("No Token");
    } else {
      console.error('Ocurrió un error inesperado:', error.message);
    }

    return throwError('Algo salió mal, inténtalo de nuevo más tarde.');
  }
}
