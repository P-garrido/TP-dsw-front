import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  proximo_id:Number | undefined
  constructor(private productService: ProductsService){}
  newProductForm = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    productDesc:  new FormControl(),
    productStock: new FormControl(0, [Validators.required]),
    productCat:  new FormControl(),
    productPrice: new FormControl(0, [Validators.required]),
    productImg:  new FormControl()
});

  addProduct(){
    // this.http.get("http://localhost:1234/products").subscribe((resp:any) => {
    //   this.proximo_id = resp[resp.length-1].id_producto + 1;
    //   console.log(this.proximo_id);
    // })

    // this.http.post("http://localhost:1234/products", 
    // {
    //   id_producto: this.proximo_id,
    //   nombre_producto: this.newProductForm.value.productName,
    //   desc_producto: this.newProductForm.value.productDesc,
    //   stock: this.newProductForm.value.productStock,
    //   id_categoria: 2,
    //   precio: this.newProductForm.value.productPrice,
    //   imagen: this.newProductForm.value.productImg,
    // })
    this.productService.createProduct(this.newProductForm.value.productName, 
      this.newProductForm.value.productDesc, 
      this.newProductForm.value.productStock,  
      this.newProductForm.value.productPrice, 
      this.newProductForm.value.productImg).subscribe(resp => console.log(resp));
    this.newProductForm.reset();
  }
}
