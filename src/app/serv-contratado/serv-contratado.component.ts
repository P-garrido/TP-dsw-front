import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BoughtService, EditBoughtService } from '../models/classes';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-serv-contratado',
  templateUrl: './serv-contratado.component.html',
  styleUrls: ['./serv-contratado.component.scss']
})
export class ServContratadoComponent {

  @Input() boughtService: BoughtService = new BoughtService(-1, -1, new Date(), -1);

  @Output() editServiceClientClick = new EventEmitter<EditBoughtService>();

  servName: string = "";
  userName: string = "";
  onEdit: boolean = false;

  hourAmmountEdit = new FormControl('', Validators.min(0));


  edit() {
    if (this.onEdit) {
      this.onEdit = false;
    }
    else {
      this.onEdit = true;
      this.hourAmmountEdit.setValue(`${this.boughtService.hourAmmount}`);
    }
  }

  sendEdit() {
    const newServClli = new EditBoughtService(this.boughtService.idService, this.boughtService.idUser, this.boughtService.serviceDate, this.hourAmmountEdit);
    this.editServiceClientClick.emit(newServClli);
  }



}
