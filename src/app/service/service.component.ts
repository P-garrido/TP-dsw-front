import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditServiceEvent, Service } from '../models/classes';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  @Input() service: Service = new Service(-1, "No disponible", 0);

  @Output() editServiceClick = new EventEmitter<EditServiceEvent>();
  @Output() deleteServiceClick = new EventEmitter<number>();

  onEdit: boolean = false;


  editServiceForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required])
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
}
