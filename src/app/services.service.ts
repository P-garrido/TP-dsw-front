import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BoughtService, EditBoughtService, EditServiceEvent, Service } from './models/classes';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {

  }



  readonly baseUrl = "http://localhost:1234/services";
  readonly buyBaseUrl = "http://localhost:1234/services-clients";
  token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Imp1YW4yMyIsInBhc3N3b3JkIjoiMTIzNCIsImlhdCI6MTY5ODQzMTY5NCwiZXhwIjoxNjk4NDMyMjk0fQ.DukxkiUJs2aSMmRuKBcd3eDY-ikiVjgmpzA1bHdS3nM";
  //Este token lo tengo que conseguir con el login service

  getAllServices() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(this.baseUrl,
      { headers });
  }
  getAllBoughtServices() {
    return this.http.get<any>(this.buyBaseUrl);
  }

  addService(fg: FormGroup) {
    return this.http.post<any>(this.baseUrl, {
      description: fg.value.description,
      hourValue: parseInt(fg.value.price),
      longDescription: fg.value.longDescription
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
      hourValue: parseInt(serv.data.value.price),
      longDescription: serv.data.value.longDescription
    });
  }

  buyService(serv: EditServiceEvent) {
    const url = this.buyBaseUrl;
    return this.http.post<any>(url, {
      idCli: 1,
      idServ: serv.id,
      date: serv.data.value.date,
      hourAmmount: null,
      clientMsg: serv.data.value.message
    })
  }

  editServiceClient(servCli: EditBoughtService) {
    const url = this.buyBaseUrl + `/${servCli.idService}/${servCli.idUser}/${servCli.serviceDate}`;
    return this.http.patch<any>(url, {
      hourAmmount: parseInt(servCli.hourAmmount.value)
    });
  }

  deleteServiceClient(idServ: number, idCli: number, servDate: Date) {
    const url = this.buyBaseUrl + `/${idServ}/${idCli}/${servDate}`;
    return this.http.delete(url);

  }
}
