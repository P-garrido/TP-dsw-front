import { Injectable } from '@angular/core';
import { Product } from './models/classes';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Product []= [ {
  image: "assets/cloro-granulado-multiaccion-x10kg-nataclor-20gr-cada-10-000lt-diariamente11-e85b8f8ec01e38f41a16210197797682-640-0.jpeg",
  name: "Cloro Granulado",
  description:"Cloro granulado precio x kg",
  price:1000,
  amount: 1
  },
  {
  image: "assets/cloro-liquido.jpeg",
  name: "Cloro Liquido",
  description:"Cloro liquido precio por unidad",
  price:2500,
  amount: 1
  }
];
  constructor() { }
}
