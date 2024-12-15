import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { SearchHelper } from 'src/assets/helpers/search.helper';
import { ApiResponse } from 'src/assets/interfaces';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  isLoading = true;
  spinnerImage = 'assets/icons/fast.png'; 
  loadingMessage = 'Procesando tu solicitud...';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchHelper: SearchHelper,
    private storeService:StoreService
  ) {}

  ngOnInit(): void {
    // Obtener el ID de la URL
    this.route.paramMap.subscribe(params => {
      const orderNumber = params.get('id') || '';
      this.getOrderDetails(orderNumber);
    });
  }

  getOrderDetails(orderNumber: string){
    // poner alguna logica para recibir el id criptado
    // llamar al search
    this.onSearch(orderNumber)
  }

  async onSearch(orderNumber: string) {
    if (orderNumber) {
      try {
        const response: ApiResponse = await this.searchHelper.onSearch(orderNumber);
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
