import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  products:any = [ {
  image: "./assets/cloro-granulado-multiaccion-x10kg-nataclor-20gr-cada-10-000lt-diariamente11-e85b8f8ec01e38f41a16210197797682-640-0.jpeg",
  name: "Cloro Granulado",
  description:"Cloro granulado precio x kg",
  price:"1000"
  },
  {
  image: "./assets/cloro-liquido.jpeg",
  name: "Cloro Liquido",
  description:"Cloro liquido precio por unidad",
  price:"2500"
  }
];

filteredProducts:any = this.products;


searchForm = new FormControl();

constructor(private cartService: CartService){
  this.searchForm.valueChanges.subscribe(value => {
    console.log(value);
    this.filteredProducts = this.products.filter((p:any) => p.name.toLowerCase().includes(value.toLowerCase()))
  })
}

  addToCart(pr:any){
    this.cartService.addProduct(pr);
  }

}
