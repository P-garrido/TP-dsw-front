import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.scss']
})
export class NewServiceComponent {
  constructor(private servicesService: ServicesService) { }


  newServiceForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required])
  });

  addService() {
    this.servicesService.addService(this.newServiceForm).subscribe();
    this.newServiceForm.reset();

  }
}
