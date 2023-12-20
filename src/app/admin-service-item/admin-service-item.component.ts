import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Service } from '../models/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-service-item',
  templateUrl: './admin-service-item.component.html',
  styleUrls: ['./admin-service-item.component.scss']
})
export class AdminServiceItemComponent {
  constructor(private router: Router) {}

  @Input() service: Service = new Service(-1, "No disponible", 0, "No dispponible");
  @Output() edit = new EventEmitter<Service>();
  @Output() delete = new EventEmitter<Service>();

  editService() {
    this.edit.emit(this.service);
  }
  deleteService() {
    this.delete.emit(this.service);
  }

  redirect(){
    this.router.navigate(['/addService'])
  }
}
