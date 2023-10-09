import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { EditServiceEvent, Service } from '../models/classes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  @Input() service: Service = new Service(-1, "No disponible", 0);
  @Input() admin: boolean | undefined;

  @Output() editServiceClick = new EventEmitter<EditServiceEvent>();
  @Output() deleteServiceClick = new EventEmitter<number>();
  @Output() buyServiceClick = new EventEmitter<EditServiceEvent>();

  onEdit: boolean = false;
  minDate: Date = new Date();
  disabledDates: Date[] = [new Date(2023, 11, 5)];
  modalRef?: BsModalRef;
  message?: string;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };

  constructor(private modalService: BsModalService) { }


  editServiceForm = new FormGroup({
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });

  serviceBuyForm = new FormGroup({
    date: new FormControl('', Validators.required),
    msg: new FormControl('', Validators.maxLength(100))
  });


  editService() {
    if (this.onEdit) {
      this.onEdit = false;
    }
    else {
      this.onEdit = true;
      this.editServiceForm.patchValue({ description: this.service.description, price: `${this.service.price}` });
    }
  }

  deleteService(idServ: number) {
    this.deleteServiceClick.emit(idServ);
  }

  sendEdit() {
    const newServ = new EditServiceEvent(this.service.id, this.editServiceForm);
    this.editServiceClick.emit(newServ);
  }

  buyService(idServ: number) {
    const buyServ = new EditServiceEvent(this.service.id, this.serviceBuyForm);
    this.buyServiceClick.emit(buyServ);
    this.modalRef?.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }
}
