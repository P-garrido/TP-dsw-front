import { FormGroup } from "@angular/forms";

export class EditServiceEvent {
  id: number;
  data: FormGroup;

  constructor(id: number, fc: FormGroup) {
    this.id = id;
    this.data = fc;
  }
}