import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from './models/classes';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = "http://localhost:1234/services";


  getAllServices() {
    return this.http.get<any>(this.baseUrl);
  }
}
