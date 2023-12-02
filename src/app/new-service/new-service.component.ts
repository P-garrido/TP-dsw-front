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
  constructor(private servicesService: ServicesService, private router: Router) {

    if (this.servicesService.serviceToEdit.description != '') {
      this.newServiceForm.controls.description.patchValue(this.servicesService.serviceToEdit.description);
      this.newServiceForm.controls.price.patchValue(this.servicesService.serviceToEdit.hourValue.toString());
      this.newServiceForm.controls.longDescription.patchValue(this.servicesService.serviceToEdit.longDescription);
    }
  }


  newServiceForm = new FormGroup({
    description: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    longDescription: new FormControl('', Validators.required)
  });

  addService() {

    if (this.servicesService.serviceToEdit.description != '') {
      let newService: Service = {
        id: this.servicesService.serviceToEdit.id,
        description: this.newServiceForm.value.description || "",
        hourValue: parseInt(this.newServiceForm.value.price || "0"),
        longDescription: this.newServiceForm.value.longDescription || ""
      }
      this.servicesService.editService(newService).subscribe(response => {
        if (response) {
          this.router.navigate(['adminServices']);
        }
      });
    }
    else {

      if (this.newServiceForm.valid) {
        let newService: Service = {
          description: this.newServiceForm.value.description || "",
          hourValue: parseInt(this.newServiceForm.value.price || "0"),
          longDescription: this.newServiceForm.value.longDescription || ""
        }

        this.servicesService.addService(newService).subscribe(response => {
          if (response) {
            this.router.navigate(['adminServices']);
          }
        });

      }
    }



  }
}
