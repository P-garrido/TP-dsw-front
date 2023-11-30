import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { Service } from '../models/classes';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.scss']
})
export class NewServiceComponent {
  constructor(private servicesService: ServicesService, private router: Router) { }


  newServiceForm = new FormGroup({
    description: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    longDescription: new FormControl('', Validators.required)
  });

  addService() {
    if (this.newServiceForm.valid) {
      let newService: Service = {
        description: this.newServiceForm.value.description || "",
        price: parseInt(this.newServiceForm.value.price || "0"),
        longDescription: this.newServiceForm.value.longDescription || ""
      }
      this.servicesService.addService(newService).subscribe(response => {
        if (response) {
          this.router.navigate(['servicios']);
        }
      });

    }
  }
}
