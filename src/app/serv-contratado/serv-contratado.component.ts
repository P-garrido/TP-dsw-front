import { Component, Input } from '@angular/core';
import { BoughtService } from '../models/classes';

@Component({
  selector: 'app-serv-contratado',
  templateUrl: './serv-contratado.component.html',
  styleUrls: ['./serv-contratado.component.scss']
})
export class ServContratadoComponent {

  @Input() boughtService: BoughtService = new BoughtService(-1, -1, new Date(), -1);

  servName: string = "";
  userName: string = "";



}
