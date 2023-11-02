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
  admin: boolean = false;


  getAllBoughtServices() {
    this.boughtServices.splice(0, this.boughtServices.length);
    this.serviceService.getAllBoughtServices().subscribe(response => {
      response.forEach((bs: any) => {
        this.boughtServices.push(new BoughtService(new Service(bs.Servicio.id_servicio, bs.Servicio.desc_servicio, bs.Servicio.precio_por_hora, bs.Servicio.descripcion), new User(bs.Usuario.id_usuario, bs.Usuario.nombre_usuario, bs.Usuario.clave, bs.Usuario.nombre, bs.Usuario.apellido, bs.Usuario.direccion, bs.Usuario.telefono, bs.Usuario.tipo_usuario, bs.Usuario.email), bs.fecha_servicio, bs.cant_horas, bs.mensaje_cliente))
      });
      this.boughtServices.sort(this.compararPorAt);
    }
    )
  }

  editeServiceCient(servCli: EditBoughtService) {
    this.serviceService.editServiceClient(servCli).subscribe(res => {
      if (res) {
        this.getAllBoughtServices();
      }
    });
  }

  deleteServiceClient(idServCli: any) {
    this.serviceService.deleteServiceClient(idServCli.idServ, idServCli.idCli, idServCli.servDate).subscribe(res => {
      if (res) {
        this.getAllBoughtServices();
      }
    });
  }


  compararPorAt(a: BoughtService, b: BoughtService) {
    if (a.hourAmmount === null && b.hourAmmount !== null) {
      return -1; // Coloca a antes que b
    } else if (a.hourAmmount !== null && b.hourAmmount === null) {
      return 1; // Coloca b antes que a
    } else {
      return 0; // Mantén el orden original
    }
  }

}
