import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from './../../../../core/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';
  isOpen: boolean = true;
  @Output() close = new EventEmitter<void>();

  constructor(private authService: AuthService,
    private router: Router)
    {}
  openModal() {
    this.isOpen = true;
  }
  closeModal() {
    this.close.emit();
  }

  onLogin() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['']); // Redirige tras el login 
    } else { 
      this.loginError = 'Clave o usuario incorrectos'; 
  }

  }
}
