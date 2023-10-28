import { Component } from '@angular/core';
import { EditServiceEvent, Service } from '../models/classes';
import { ServicesService } from '../services.service';
import { FormControl } from '@angular/forms';
import { LogInService } from '../log-in.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {

  constructor(private servicesService: ServicesService, private loginService: LogInService) {
    this.getAllServices();

    this.searchForm.valueChanges.subscribe(value => {
      this.filteredServices = this.services.filter((s: Service) => s.description.toLowerCase().includes(value.toLowerCase()))
    });
    if (loginService.user.type == 1) {
      this.admin = true
    }
    else {
      this.admin = false
    }
  }
  services: Array<Service> = [];
  filteredServices: Array<Service> = [];

  admin: boolean = false;

  searchForm = new FormControl();







  getAllServices() {
    this.servicesService.getAllServices().subscribe(response => {
      response.forEach((serv: any) => {
        this.services.push(new Service(serv.id_servicio, serv.desc_servicio, serv.precio_por_hora, serv.descripcion))
        this.filteredServices.push(new Service(serv.id_servicio, serv.desc_servicio, serv.precio_por_hora, serv.descripcion))
      });
    });
  }

  deleteService(idServ: number) {
    this.servicesService.deleteService(idServ).subscribe();
    window.location.reload();
  }

  editService(serv: EditServiceEvent) {

    this.servicesService.editService(serv).subscribe();
    window.location.reload();
  }

  buyService(serv: EditServiceEvent) { //OBTENER NRO CLIENTE
    this.servicesService.buyService(serv, this.loginService.user.idUser).subscribe(
      response => console.log(response)
    );
  }
}
