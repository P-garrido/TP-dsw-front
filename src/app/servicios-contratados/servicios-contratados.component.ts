import { Component } from '@angular/core';
import { BoughtService, EditBoughtService } from '../models/classes';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-servicios-contratados',
  templateUrl: './servicios-contratados.component.html',
  styleUrls: ['./servicios-contratados.component.scss']
})
export class ServiciosContratadosComponent {

  constructor(private serviceService: ServicesService) {
    this.getAllBoughtServices();
  }


  boughtServices: BoughtService[] = [];


  getAllBoughtServices() {
    this.serviceService.getAllBoughtServices().subscribe(response => {
      response.forEach((bs: any) => {
        this.boughtServices.push(new BoughtService(bs.id_servicio, bs.id_usuario, bs.fecha_servicio, bs.cant_horas, bs.mensaje_cliente))
      })
    }
    )
  }

  editeServiceCient(servCli: EditBoughtService) {
    this.serviceService.editServiceClient(servCli).subscribe();
    window.location.reload();
  }

  deleteServiceClient(idServCli: any) {
    this.serviceService.deleteServiceClient(idServCli.idServ, idServCli.idCli, idServCli.servDate).subscribe();
    window.location.reload();
  }

}
