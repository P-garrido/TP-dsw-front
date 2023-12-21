export class Product {

  id_producto: number;
  imagen: any;
  nombre_producto: string;
  desc_producto: string;
  precio: number;
  amount: number;
  stock: number;

  constructor(img: any, name: string, desc: string, pr: number, am: number, stock: number, id_producto: number) {
    this.id_producto = id_producto;
    this.imagen = img;
    this.nombre_producto = name;
    this.desc_producto = desc;
    this.precio = pr;
    this.stock = stock
    this.amount = am
  }
}