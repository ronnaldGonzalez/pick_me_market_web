import { Component } from '@angular/core';
import { SearchHelper } from '../../../assets/helpers/search.helper';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/assets/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isLoginModalOpen: boolean = false;
  orderNumber: string = '';

  constructor(
    private searchHelper: SearchHelper,
    private storeService: StoreService,
    private router: Router
  ) { }

  openLoginModal() {
    this.isLoginModalOpen = true;
  }

  closeLoginModal() {
    this.isLoginModalOpen = false;
  }

  goToCreateOrder() {
    this.router.navigate(['navigatonLayout', 'createOrder'], { skipLocationChange: true });
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
