import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { LogInService } from '../log-in.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from '../models/classes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  modalRef?: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  constructor(public loginService: LogInService, private modalService: BsModalService, private router: Router) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
  closeModal() {
    this.modalRef?.hide();
  }
  logOut() {
    this.loginService.user = new User(-1, "", "", "", "", "", "", -1, "");
    this.closeModal();
    this.router.navigate(['inicio']);
  }
}
