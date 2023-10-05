import { Component } from '@angular/core';
import { EditServiceEvent, Service } from '../models/classes';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {

  constructor(private servicesService: ServicesService) {
    this.getAllServices();
  }
  services: Array<Service> = [];





  getAllServices() {
    this.servicesService.getAllServices().subscribe(response => {
      response.forEach((serv: any) => {
        this.services.push(new Service(serv.id_servicio, serv.desc_servicio, serv.precio_por_hora))
      });
    });
  }

  deleteService(idServ: number) {
    this.servicesService.deleteService(idServ).subscribe();
    window.location.reload(); //Arreglar esto para que quede mejor;
  }

  editService(serv: EditServiceEvent) {

    this.servicesService.editService(serv).subscribe();
    window.location.reload(); //Arreglar esto para que quede mejor;
  }

  buyService(serv: EditServiceEvent) { //OBTENER NRO CLIENTE
    this.servicesService.buyService(serv).subscribe(
      response => console.log(response)
    );
  }
}
