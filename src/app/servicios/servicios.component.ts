import { Component } from '@angular/core';
import { EditServiceEvent, Service } from '../models/classes';
import { ServicesService } from '../services.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {

  constructor(private servicesService: ServicesService) {
    this.getAllServices();

    this.searchForm.valueChanges.subscribe(value => {
      this.filteredServices = this.services.filter((s: Service) => s.description.toLowerCase().includes(value.toLowerCase()))
    });
  }
  services: Array<Service> = [];
  filteredServices: Array<Service> = [];

  admin: boolean = true;

  searchForm = new FormControl();







  getAllServices() {
    this.servicesService.getAllServices().subscribe(response => {
      response.forEach((serv: any) => {
        this.services.push(new Service(serv.id_servicio, serv.desc_servicio, serv.precio_por_hora))
        this.filteredServices.push(new Service(serv.id_servicio, serv.desc_servicio, serv.precio_por_hora))
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
