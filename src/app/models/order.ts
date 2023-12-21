import { Product } from "./product";

export class Order {
  id_pedido: number;
  fecha: string;
  id_cliente: number;
  total: number;
  productos_pedidos: Product[];

  constructor(idUs: number, fecha: string, tot: number, idCli: number) {
    this.id_pedido = idUs;
    this.fecha = fecha;
    this.total = tot;
    this.productos_pedidos = [];
    this.id_cliente = idCli;
  }
}