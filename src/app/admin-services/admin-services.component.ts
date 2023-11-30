import { Component } from '@angular/core';
import { EditServiceEvent, Service } from '../models/classes';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.scss']
})
export class AdminServicesComponent {


  constructor(private servicesService: ServicesService) {

  }

  servicesList: Service[] = [];


  getAllServices() {
    this.servicesList.splice(0, this.servicesList.length);
    this.servicesService.getAllServices().subscribe(response => {
      response.forEach((serv: any) => {
        this.servicesList.push(new Service(serv.id_servicio, serv.desc_servicio, serv.precio_por_hora, serv.descripcion))
      });
    });
  }




  deleteService(idService: number) {
    this.servicesService.deleteService(idService).subscribe(response => {
      if (response) {
        this.getAllServices();
      }
    });

  }

  editService(service: EditServiceEvent) {

    this.servicesService.editService(service).subscribe(response => {
      if (response) {
        this.getAllServices();
      }
    });
  }




}
