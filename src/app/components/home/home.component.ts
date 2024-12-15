import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoginModalOpen: boolean = false;
  openLoginModal() {
    this.isLoginModalOpen = true;
  }
  closeLoginModal() {
    this.isLoginModalOpen = false;
  }
}


