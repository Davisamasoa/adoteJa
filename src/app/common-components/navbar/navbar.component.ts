import { Component, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  openSideNav = false;

  toggleOpenSideMenu(el: HTMLElement) {
    this.openSideNav = !this.openSideNav;

    if (this.openSideNav) {
      el.classList.remove('menuSideOff');
      el.classList.add('menuSideOn');
      el.classList.remove('-left-[100vw]');
      el.classList.add('left-0');
    } else {
      el.classList.remove('menuSideOn');
      el.classList.add('menuSideOff');
      el.classList.remove('left-0');
      el.classList.add('-left-[100vw]');
    }
    console.log(el.classList);
  }
}
