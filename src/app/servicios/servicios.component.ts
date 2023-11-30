import { Component, TemplateRef } from '@angular/core';
import { EditServiceEvent, Service } from '../models/classes';
import { ServicesService } from '../services.service';
import { FormControl } from '@angular/forms';
import { LogInService } from '../log-in.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {

  constructor(private servicesService: ServicesService, private loginService: LogInService, private modalService: BsModalService, private router: Router) {
    this.getAllServices();

    if (loginService.user.type == 1) {
      this.admin = true
    }
    else {
      this.admin = false
    }
  }
  services: Array<Service> = [];

  admin: boolean = false;

  searchForm = new FormControl();

  modalRef?: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };







  getAllServices() {
    this.services.splice(0, this.services.length);
    this.servicesService.getAllServices().subscribe(response => {
      response.forEach((serv: any) => {
        this.services.push(new Service(serv.id_servicio, serv.desc_servicio, serv.precio_por_hora, serv.descripcion))
      });
    });
  }

  filterServices() {
    this.services.splice(0, this.services.length);
    this.servicesService.filterServices(this.searchForm.value).subscribe(response => {
      response.forEach((serv: any) => {
        this.services.push(new Service(serv.id_servicio, serv.desc_servicio, serv.precio_por_hora, serv.descripcion))
      });
    })
  }

  // deleteService(idService: number) {
  //   this.servicesService.deleteService(idService).subscribe(response => {
  //     if (response) {
  //       this.getAllServices();
  //     }
  //   });

  // }

  // editService(service: EditServiceEvent) {

  //   this.servicesService.editService(service).subscribe(response => {
  //     if (response) {
  //       this.getAllServices();
  //     }
  //   });
  // }

  buyService(service: EditServiceEvent, modalLogin: TemplateRef<any>, modalConfirm: TemplateRef<any>) {
    this.servicesService.buyService(service, this.loginService.user.idUser).subscribe(
      response => this.openModal(modalConfirm),
      error => this.openModal(modalLogin)
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  confirm(): void {
    this.modalRef?.hide();
    this.router.navigate(['/logIn']);
  }
}
