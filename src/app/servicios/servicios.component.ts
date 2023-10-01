import { Component } from '@angular/core';
import { Service } from '../models/classes';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {

  constructor(private servicesService: ServicesService) { }
  /*  services: Service[] = [new Service("mantenimiento de piletas", "Limpiemos tu pileta las veces que quieras", 2500),
    new Service("pintado de piletas", "Pintamos tu pileta en menos de una semana", 50000),
    new Service("Jardinería", "Cortamos tu césped las veces que quieras", 6500)];*/
  services: Array<Service> = [];


  ngOnInit() {
    this.getAllServices();
  }


  getAllServices() {
    this.servicesService.getAllServices().subscribe(response => {
      response.forEach((serv: any) => {
        this.services.push(new Service(serv.desc_servicio, serv.precio_por_hora))
      });
    });
  }
}
