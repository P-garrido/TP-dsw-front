import { Component } from '@angular/core';
import { Service } from '../models/classes';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {

  services: Service[] = [new Service("mantenimiento de piletas", "Limpiemos tu pileta las veces que quieras", 2500),
  new Service("pintado de piletas", "Pintamos tu pileta en menos de una semana", 50000),
  new Service("Jardinería", "Cortamos tu césped las veces que quieras", 6500)];

}
