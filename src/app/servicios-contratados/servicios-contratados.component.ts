import { Component } from '@angular/core';
import { BoughtService, EditBoughtService, Service, User } from '../models/classes';
import { ServicesService } from '../services.service';
import { LogInService } from '../log-in.service';

@Component({
  selector: 'app-servicios-contratados',
  templateUrl: './servicios-contratados.component.html',
  styleUrls: ['./servicios-contratados.component.scss']
})
export class ServiciosContratadosComponent {

  constructor(private serviceService: ServicesService, private loginService: LogInService) {
    this.getAllBoughtServices();

    if (loginService.user.type == 1) {
      this.admin = true
    }
  }


  boughtServices: BoughtService[] = [];
  filteredBoughtServices: BoughtService[] = [];
  admin: boolean = false;


  getAllBoughtServices() {
    this.boughtServices.splice(0, this.boughtServices.length);
    this.filteredBoughtServices.splice(0, this.filteredBoughtServices.length);
    this.serviceService.getAllBoughtServices().subscribe(response => {
      response.forEach((boughtService: any) => {
        this.boughtServices.push(new BoughtService(new Service(boughtService.Servicio.id_servicio, boughtService.Servicio.desc_servicio, boughtService.Servicio.precio_por_hora, boughtService.Servicio.descripcion), new User(boughtService.Usuario.id_usuario, boughtService.Usuario.nombre_usuario, boughtService.Usuario.clave, boughtService.Usuario.nombre, boughtService.Usuario.apellido, boughtService.Usuario.direccion, boughtService.Usuario.telefono, boughtService.Usuario.tipo_usuario, boughtService.Usuario.email), boughtService.fecha_servicio, boughtService.cant_horas, boughtService.mensaje_cliente));
        this.filteredBoughtServices.push(new BoughtService(new Service(boughtService.Servicio.id_servicio, boughtService.Servicio.desc_servicio, boughtService.Servicio.precio_por_hora, boughtService.Servicio.descripcion), new User(boughtService.Usuario.id_usuario, boughtService.Usuario.nombre_usuario, boughtService.Usuario.clave, boughtService.Usuario.nombre, boughtService.Usuario.apellido, boughtService.Usuario.direccion, boughtService.Usuario.telefono, boughtService.Usuario.tipo_usuario, boughtService.Usuario.email), boughtService.fecha_servicio, boughtService.cant_horas, boughtService.mensaje_cliente));
      });
    }
    )
  }

  editeServiceCient(serviceClient: EditBoughtService) {
    this.serviceService.editServiceClient(serviceClient).subscribe(response => {
      if (response) {
        this.getAllBoughtServices();
      }
    });
  }

  deleteServiceClient(ServiceClient: any) {
    this.serviceService.deleteServiceClient(ServiceClient.idService, ServiceClient.idClient, ServiceClient.serviceDate).subscribe(response => {
      if (response) {
        this.getAllBoughtServices();
      }
    });
  }


  compareByAt(a: BoughtService, b: BoughtService) {
    if (a.hourAmmount === null && b.hourAmmount !== null) {
      return -1; // pone a antes que b
    } else if (a.hourAmmount !== null && b.hourAmmount === null) {
      return 1; // pone b antes que a
    } else {
      return 0; // Mantiene el orden original
    }
  }

  getMadeServices() {
    this.filteredBoughtServices = this.boughtServices.filter((boughtService: BoughtService) => boughtService.hourAmmount != null);
  }

  getUnmadeServices() {
    this.filteredBoughtServices = this.boughtServices.filter((boughtService: BoughtService) => boughtService.hourAmmount == null);
  }


  getJustBoughtServices() {
    this.filteredBoughtServices = this.boughtServices;
  }

}
