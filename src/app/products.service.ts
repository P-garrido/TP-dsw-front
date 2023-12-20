import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { LogInService } from './log-in.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Product []= [];

  productToEdit: Product = new Product('', '', '', 0,0 ,0 ,0); 
  constructor(private http: HttpClient, private logInService: LogInService) {
  }
  token = this.logInService.token;
  editProduct(id: number, name:any, desc:string, stock: any, price:any, img:string){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.patch("http://localhost:1234/products", 
    {
      id_producto: id,
      nombre_producto: name,
      desc_producto: desc,
      stock: stock,
      precio: price,
      imagen: img
    }, {headers}).pipe(catchError(this.handleError))
  }

  getProductByDescription(description: string): Observable<Product[]>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<Product[]>(`http://localhost:1234/products/desc_producto/${description}`, {headers}).pipe(catchError(this.handleError));
  }

  loadProducts(): Observable<Product[]>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
      return this.http.get<Product[]>("http://localhost:1234/products", {headers}).pipe(catchError(this.handleError))
  }

  createProduct(name:any, desc:string, stock: any, price:any, img:string){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
      return  this.http.post("http://localhost:1234/products", 
    {
      nombre_producto: name,
      desc_producto: desc,
      stock: stock,
      precio: price,
      imagen: img
    }, {headers})
  }

  deleteProduct(idProd:number){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.delete("http://localhost:1234/products/" + idProd.toString(), {headers})
  }

  getImage(id: number){
    return fetch(`http://localhost:1234/images/${id}`);
  }

  uploadImg(fd: any){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post('http://localhost:1234/images/upload', fd, {headers})
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      alert('No se encontraron los productos');
    } else {
      console.error('Ocurrió un error inesperado:', error.message);
    }

    return throwError(() => new Error('Ocurrio un error'));
  }
}
