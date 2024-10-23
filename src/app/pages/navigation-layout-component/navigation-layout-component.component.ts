import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-layout-component',
  templateUrl: './navigation-layout-component.component.html',
  styleUrls: ['./navigation-layout-component.component.css']
})
export class NavigationLayoutComponentComponent {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  
}
