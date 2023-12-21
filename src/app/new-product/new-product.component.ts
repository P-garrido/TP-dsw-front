import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  proximo_id:Number | undefined
  
  newProductForm = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    productDesc:  new FormControl(),
    productStock: new FormControl(0, [Validators.required]),
    productPrice: new FormControl(0, [Validators.required]),
    productImg:  new FormControl()
});

  constructor(private productService: ProductsService, private router: Router){
    if(this.productService.productToEdit.nombre_producto != ''){
      this.newProductForm.controls.productName.patchValue(this.productService.productToEdit.nombre_producto);
      this.newProductForm.controls.productDesc.patchValue(this.productService.productToEdit.desc_producto);
      this.newProductForm.controls.productImg.patchValue(this.productService.productToEdit.imagen);
      this.newProductForm.controls.productPrice.patchValue(this.productService.productToEdit.precio);
      this.newProductForm.controls.productStock.patchValue(this.productService.productToEdit.stock);
    }
  }

  addProduct(input: any){

    const imgData = new FormData();
    imgData.append('image', input.files[0]);
    if(this.productService.productToEdit.nombre_producto != ''){
      this.productService.editProduct(this.productService.productToEdit.id_producto , this.newProductForm.value.productName, 
      this.newProductForm.value.productDesc, 
      this.newProductForm.value.productStock,  
      this.newProductForm.value.productPrice, 
      this.newProductForm.value.productImg).subscribe();
      this.productService.uploadImg(imgData).subscribe();

    }else{
    this.productService.createProduct(this.newProductForm.value.productName, 
      this.newProductForm.value.productDesc, 
      this.newProductForm.value.productStock,  
      this.newProductForm.value.productPrice, 
      this.newProductForm.value.productImg).subscribe();
      this.productService.uploadImg(imgData).subscribe();
      this.newProductForm.reset();
    }
  }
  redirect(){
    this.router.navigate(['/adminProducts'])
  }
}
