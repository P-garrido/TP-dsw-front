import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from './models/classes';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {

  }

  readonly baseUrl = "http://localhost:1234/services";


  getAllServices() {
    return this.http.get<any>(this.baseUrl);
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

  editService(idServ: number, fg: FormGroup) {
    const url = this.baseUrl + `/${idServ}`;
    return this.http.patch<any>(url, {
      description: fg.value.description,
      hourValue: parseInt(fg.value.price)
    });
  }
}
