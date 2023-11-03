import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BranchesService } from '../branches.service';
import { Branch } from '../models/classes';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { SucursalModalComponent } from '../sucursal-modal/sucursal-modal.component';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
  providers: [MdbModalService]
})
export class SucursalesComponent {
    admin: boolean = true;  // login no esta implementado todavia
  searchForm = new FormControl();
  filter_text: string = '';
  modalRef!: MdbModalRef<SucursalModalComponent>;

  constructor(public service: BranchesService, private modalService: MdbModalService) {
    this.service.load();
    this.searchForm.valueChanges.subscribe(o => this.filter_text = o);
  }

  filteredBranches(): Branch[] {
    return this.service.filter(this.filter_text)
  }

  remove(branch: Branch) {
    if (branch.id_sucursal) {
      this.service.remove(branch.id_sucursal);
    }
  }

  add() {
    let modalRef = this.modalService.open(SucursalModalComponent, {});
    modalRef.component.onSubmit.subscribe((form: FormGroup) => {
      // create payload
      let branch: Branch = {
          // id_sucursal: form.value.id,
          nombre: form.value.name || "",
          direccion: form.value.address || ""
      }

      // create branch
      this.service.add(branch);

      // reset form
      form.reset();

      // close modal
      modalRef.close()
    });
  }

  update(branch: Branch) {
    let modalRef = this.modalService.open(SucursalModalComponent, {});

    modalRef.component.form.controls.name.setValue(branch.nombre);
    modalRef.component.form.controls.address.setValue(branch.direccion);

    modalRef.component.onSubmit.subscribe((form: FormGroup) => {
      // Update branch data using form data
      let new_branch: Branch = {
        id_sucursal: branch.id_sucursal,
        nombre: form.value.name,
        direccion: form.value.address
      }

      // create branch
      this.service.update(new_branch);

      // reset form
      form.reset();

      // close modal
      modalRef.close()
    });
  }
}
