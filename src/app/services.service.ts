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
    const headers = new HttpHeaders().set('Content-type', `application/json`);
    return this.http.post<any>(this.baseUrl, {
      description: fg.value.description,
      hourValue: parseInt(fg.value.price)
    });
  }

  deleteService() {
    //this.http.delete()
  }
}
