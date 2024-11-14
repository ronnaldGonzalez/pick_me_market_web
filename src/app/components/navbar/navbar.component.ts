import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { SearchHelper } from '../../../assets/helpers/search.helper';
import { StoreService } from '../../services/store.service';
import { ApiResponse } from 'src/assets/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  orderNumber!: string;
  isMenuOpen = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private searchHelper: SearchHelper,
    private storeService:StoreService) { }

  logout() {
    this.authService.logout();
    this.goToHome();
  }

  goToHome(){
    this.router.navigate([''], { skipLocationChange: true });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  async onSearch() {
    if (this.orderNumber) {
      try {
        const response: ApiResponse = await this.searchHelper.onSearch(this.orderNumber);
        if (response) {
          this.storeService.searchOrderResults = response;
          this.router.navigate(['navigatonLayout', 'orderDetail'], { skipLocationChange: true });
        } else {
          // TODO: Handle the error (display a message or show a modal)
          console.log('No information found for this order.');
        }
      } catch (err) {
        // TODO: Handle the error (display a message or show a modal)
        console.error('Error searching for order', err);
      }
    }
  }
} 
