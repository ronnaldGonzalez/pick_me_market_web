import { Component } from '@angular/core';
import { SearchHelper } from '../../../assets/helpers/search.helper';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoginModalOpen: boolean = false;

  constructor(
    private searchHelper: SearchHelper,
    private storeService: StoreService,
    private router: Router
  ) { }


  orderNumber: string = '';
  openLoginModal() {
    this.isLoginModalOpen = true;
  }
  closeLoginModal() {
    this.isLoginModalOpen = false;
  }

  async onSearch() {
    if (this.orderNumber) {
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
}
