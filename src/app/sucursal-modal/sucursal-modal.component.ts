import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sucursal-modal',
  templateUrl: './sucursal-modal.component.html',
  styleUrls: ['./sucursal-modal.component.scss']
})
export class SucursalModalComponent {
    action: string = 'Agregar';
  form = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    address:  new FormControl('', Validators.required)
  });

  @Output() onSubmit = new EventEmitter<FormGroup>();

  submit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form);
    }
  }
}
