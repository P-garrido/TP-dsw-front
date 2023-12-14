import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BoughtService } from './models/boughtService';
import { EditBoughtService } from './models/editBoughtService';
import { EditServiceEvent } from './models/editServiceEvent';
import { Service } from './models/service';
import { FormGroup } from '@angular/forms';
import { LogInService } from './log-in.service';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient, private loginService: LogInService) {

  }

  serviceToEdit: Service = new Service(-1, "", 0, "");


  readonly baseUrl = "http://localhost:1234/services";
  readonly buyBaseUrl = "http://localhost:1234/services-clients";



  getAllServices() {
    return this.http.get<Service[]>(this.baseUrl);
  }


  filterServices(serviceDescription: String) {
    let url: string = this.baseUrl + `/descService/${serviceDescription}`;
    return this.http.get<Service[]>(url);
  }


  getAllBoughtServices() {
    const token = this.loginService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<BoughtService[]>(this.buyBaseUrl, { headers });
  }

  addService(service: Service) {
    const token = this.loginService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<Service>(this.baseUrl, { service }, { headers });
  }

  deleteService(idService: number) {
    const url = this.baseUrl + `/${idService}`;
    const token = this.loginService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(url, { headers });
  }

  editService(service: Service) {
    const url = this.baseUrl + `/${service.id}`;
    const token = this.loginService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch<Service>(url, { service }, { headers });
  }

  buyService(service: EditServiceEvent, idUser: number) {
    const url = this.buyBaseUrl;
    const token = this.loginService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(url, {
      idCli: idUser,
      idServ: service.id,
      date: service.data.value.date,
      hourAmmount: null,
      clientMessage: service.data.value.message
    },
      { headers }).pipe(catchError(this.handleError))
  }

  editServiceClient(serviceClient: EditBoughtService) {
    const url = this.buyBaseUrl + `/${serviceClient.idService}/${serviceClient.idUser}/${serviceClient.serviceDate}`;
    const token = this.loginService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch<any>(url, {
      hourAmmount: parseInt(serviceClient.hourAmmount.value)
    }, { headers }).pipe(catchError(this.handleError));
  }

  deleteServiceClient(idService: number, idClient: number, serviceDate: Date) {
    const url = this.buyBaseUrl + `/${idService}/${idClient}/${serviceDate}`;
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
