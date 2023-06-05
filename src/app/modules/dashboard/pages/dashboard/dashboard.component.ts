import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isShowMenu: boolean = false;

  toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
  }
}
