import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { SearchHelper } from '../../../assets/helpers/search.helper';
import { StoreService } from '../../services/store.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  orderNumber!: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private searchHelper: SearchHelper,
    private storeService:StoreService) { }
  logout() {
    this.authService.logout();
    this.router.navigate(['']); // Redirigir al login después de cerrar sesión
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  async onSearch() {
    if (this.orderNumber) {
        try {
            const response = await this.searchHelper.onSearch(this.orderNumber);
            if (response) {
                console.log('Guardando información', response);
                this.storeService.searchOrderResults = response;
                this.router.navigate(['navigatonLayout','orderDetail'])
            } else {
                console.log('No se encontró información para esta orden.');
            }
        } catch (err) {
            console.error('Error al buscar orden', err);
        } 
    }
}
} 
