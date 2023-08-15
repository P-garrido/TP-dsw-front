import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  menu: boolean = false;

  menuScroll() {
    if (this.menu == false) {
      this.menu = true;
    }
    else {
      this.menu = false;
    }
  }
}
