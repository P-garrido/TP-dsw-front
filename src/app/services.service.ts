import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EditServiceEvent, Service } from './models/classes';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {

  }

  readonly baseUrl = "http://localhost:1234/services";
  readonly buyBaseUrl = "http://localhost:1234/services-clients";


  getAllServices() {
    return this.http.get<any>(this.baseUrl);
  }
  getAllBoughtServices() {
    return this.http.get<any>(this.buyBaseUrl);
  }

  addService(fg: FormGroup) {
    return this.http.post<any>(this.baseUrl, {
      description: fg.value.description,
      hourValue: parseInt(fg.value.price)
    });
  }

  deleteService(idServ: number) {
    const url = this.baseUrl + `/${idServ}`;
    return this.http.delete(url);
  }

  editService(serv: EditServiceEvent) {
    const url = this.baseUrl + `/${serv.id}`;
    return this.http.patch<any>(url, {
      description: serv.data.value.description,
      hourValue: parseInt(serv.data.value.price)
    });
  }

  buyService(serv: EditServiceEvent) {
    const url = this.buyBaseUrl;
    return this.http.post<any>(url, {
      idCli: 1,
      idServ: serv.id,
      date: serv.data.value.date,
      hourAmmount: null
    })
  }
}
