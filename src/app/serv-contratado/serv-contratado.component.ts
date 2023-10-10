import { Component, Input } from '@angular/core';
import { BoughtService } from '../models/classes';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-serv-contratado',
  templateUrl: './serv-contratado.component.html',
  styleUrls: ['./serv-contratado.component.scss']
})
export class ServContratadoComponent {

  @Input() boughtService: BoughtService = new BoughtService(-1, -1, new Date(), -1);

  servName: string = "";
  userName: string = "";
  onEdit: boolean = false;

  hourAmmountEdit = new FormControl('', Validators.min(0))


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

  }



}
