import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiResponse } from 'src/assets/interfaces';

@Injectable({
  providedIn: 'root',
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
      repuestos: [],
    },
  });

  public carritoData = new BehaviorSubject<any[]>(this.getCarritoFromStorage()); // Inicializa con los datos de localStorage

  set searchOrderResults(newState: ApiResponse) {
    this.searchOrderResultsData.next(newState);
  }

  get searchOrderResults() {
    return this.searchOrderResultsData.getValue();
  }

  // Manejo del estado del carrito
  set carrito(newCarrito: any[]) {
    this.carritoData.next(newCarrito);
    this.saveCarritoToStorage(newCarrito); // Guarda el carrito en localStorage cada vez que se actualiza
  }

  get carrito() {
    return this.carritoData.getValue();
  }

  // Función para guardar el carrito en localStorage
  private saveCarritoToStorage(carrito: any[]): void {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  // Función para obtener el carrito de localStorage
  private getCarritoFromStorage(): any[] {
    const carrito = localStorage.getItem('carrito');
    return carrito ? JSON.parse(carrito) : []; // Si no existe en localStorage, retorna un array vacío
  }
}
