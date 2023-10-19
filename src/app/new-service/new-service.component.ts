import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.scss']
})
export class NewServiceComponent {
  constructor(private servicesService: ServicesService, private router: Router) { }


  newServiceForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)])
  });

  addService() {
    if (this.newServiceForm.valid) {
      this.servicesService.addService(this.newServiceForm).subscribe();
      this.router.navigate(['servicios']);
    }
  }
}
