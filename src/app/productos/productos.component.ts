import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

  constructor(private cartService: CartService){}
  products:any = [ {
  image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcolombia.com.co%2Fproducto%2Fcloro-granulado%2F&psig=AOvVaw26O0p9nElJhoq4pkXqrekN&ust=1692925065837000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKiC3ruL9IADFQAAAAAdAAAAABAE",
  name: "Cloro Granulado",
  description:"Cloro granulado precio x kg",
  price:"1000"
  },
  {
  image: "",
  name: "Cloro Liquido",
  description:"Cloro liquido precio por unidad",
  price:"2500"
  }];

  addToCart(pr:any){
    this.cartService.addProduct(pr);
  }

}
