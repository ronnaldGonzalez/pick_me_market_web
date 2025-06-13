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

  // isLoading = true;
  routes: Record<string, string> = {
    creacionOferta: '/proveedorOrderDetail',
    estadoSolicitud: '/clientOrderDetail'
  };
  ruta: string = '';
  order_id: number = 0;
  proveedor_id: number = 0;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchHelper: SearchHelper,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    console.log('por aca')
    const urlSegments = this.router.url.split('/');

    const currentUrl = urlSegments[1];
    this.order_id = Number(this.route.snapshot.paramMap.get('id'));
    this.proveedor_id  = Number(this.route.snapshot.paramMap.get('proveedor'));

    this.order_id = isNaN(this.order_id) ? 0 : this.order_id;
    this.proveedor_id = isNaN(this.proveedor_id) ? 0 : this.proveedor_id;
    this.ruta = this.routes[currentUrl]

    this.storeService.showLoading();
    this.getOrderDetails(this.order_id);
  }

  getOrderDetails(orderNumber: number) {
    // poner alguna logica para recibir el id criptado
    // llamar al search
    this.onSearch(orderNumber)
  }

  async onSearch(orderNumber: number) {
    if (orderNumber) {
      try {
        const response: ApiResponse = await this.searchHelper.onSearch(orderNumber);
        response.OrderId = this.order_id;
        response.proveedor_id = this.proveedor_id;
        if (response) {
          this.storeService.hideLoading();
          this.storeService.searchOrderResults = response;
          this.router.navigate([this.ruta], { skipLocationChange: true });
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
