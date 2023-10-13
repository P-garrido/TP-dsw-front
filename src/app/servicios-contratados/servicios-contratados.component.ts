import { Component } from '@angular/core';
import { BoughtService, EditBoughtService } from '../models/classes';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-servicios-contratados',
  templateUrl: './servicios-contratados.component.html',
  styleUrls: ['./servicios-contratados.component.scss']
})
export class ServiciosContratadosComponent {

  constructor(private serviceSerice: ServicesService) {
    this.getAllBoughtServices();
  }


  boughtServices: BoughtService[] = [];


  getAllBoughtServices() {
    this.serviceSerice.getAllBoughtServices().subscribe(response => {
      response.forEach((bs: any) => {
        this.boughtServices.push(new BoughtService(bs.id_servicio, bs.id_usuario, bs.fecha_servicio, bs.cant_horas))
      })
    }
    )
  }

  editeServiceCient(servCli: EditBoughtService) {
    this.serviceSerice.editServiceClient(servCli).subscribe();
    window.location.reload();
  }

}
