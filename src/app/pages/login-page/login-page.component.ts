import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  isLoginModalOpen: boolean = true;
  openLoginModal() {
    this.isLoginModalOpen = true;
  }
  closeLoginModal() {
    this.isLoginModalOpen = false;
  }

}
