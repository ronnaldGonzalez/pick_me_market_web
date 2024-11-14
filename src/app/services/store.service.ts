import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiResponse } from 'src/assets/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private searchOrderResultsData = new BehaviorSubject<ApiResponse>({
    status: 'OK',
    message: '',
    data: {
      idSolicitud: 0,
      patente: '',
      marca: '',
      modelo: '',
      año: 2020,
      vin: '',
      repuestos: []
    }
  });
  public carritoData = new BehaviorSubject<any[]>([]); 

  set searchOrderResults (newState: ApiResponse) {
    this.searchOrderResultsData.next(newState);
  }

  get searchOrderResults() {
    return this.searchOrderResultsData.getValue();
  }

  // Manejo del estado del carrito
  set carrito(newCarrito: any[]) {
    this.carritoData.next(newCarrito);
  }

  get carrito() {
    return this.carritoData.getValue();
  }
}
