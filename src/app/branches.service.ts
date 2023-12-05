import { Injectable } from '@angular/core';
import { Branch } from './models/classes';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  branches: Branch [] = []
  api_schema: string = "http"
  api_host: string = "localhost:1234"
  url_get_all_branches = `${this.api_schema}://${this.api_host}/branches`

  constructor(private http: HttpClient) {}

  load(): void {
    this.getAll().subscribe((branches) => {
      this.branches = branches;
    })
  }

  filter(value?: string): Branch[] {
    if (value) {
      return this.branches.filter(o => {
        let similar_name = o.nombre.toLowerCase().includes(value.toLowerCase())
        let similar_address = o.direccion.toLowerCase().includes(value.toLowerCase())
        return similar_name || similar_address
      });
    }
    return this.branches;
  }

  getAll(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.url_get_all_branches);
  }

  add(branch: Branch): void {
    this.http.post<Branch>(
      this.url_get_all_branches, branch, {observe: 'response'}
    ).subscribe(
      response => {
        if (response.status == 201 && response.body) {
          this.branches.push(response.body)
        }
      }
    );
  }

  remove(id: number): void {
    let delete_url = `${this.url_get_all_branches}/${id}/`
    this.http.delete(delete_url, {observe: 'response'}).subscribe(
      response => {
        if (response.status == 204) {
          this.branches = this.branches.filter(o => o.id_sucursal != id);
        }
      }
    );
  }

  update(branch: Branch): void {
    if (branch.id_sucursal) {
      let update_url = `${this.url_get_all_branches}/${branch.id_sucursal}/`;
      this.http.patch<Branch>(update_url, branch, {observe: 'response'}).subscribe(
        (response) => {
            let i = this.branches.findIndex(o => o.id_sucursal == branch.id_sucursal);
            this.branches[i] = response.body as Branch
        }
      );
    }
  }
}
