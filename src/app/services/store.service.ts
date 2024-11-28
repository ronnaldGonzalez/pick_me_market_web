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
      vehiculo: {
        patente: '',
        marca: '',
        modelo: '',
        anio: 2020,
        vin: '',
        repuestos: [],
      },
      cliente: {},
      idSolicitud: 0,
      
    },
  });
  private clienteData = new BehaviorSubject<any>({ });
  private vehicleData = new BehaviorSubject<any>({ });
  public carritoData = new BehaviorSubject<any[]>(this.getCarritoFromStorage()); // Inicializa con los datos de localStorage
  private repuestosListData = new BehaviorSubject<any>([]);

  // observables
  clienteData$ = this.clienteData.asObservable();
  vehicleData$ = this.vehicleData.asObservable();
  repuestosListData$ = this.repuestosListData.asObservable();

  // Getters y setters para repuestos
  get repuestos() {
    return this.repuestosListData.getValue();
  }

  set repuestos(newRepuestosListData: any) {
    this.repuestosListData.next(newRepuestosListData);
  }
   // Getters y setters para el vehiculo
   get vehiculo() {
    return this.vehicleData.getValue();
  }

  set vehiculo(nuevoVehiculo: any) {
    this.vehicleData.next(nuevoVehiculo);
  }

   // Getters y setters para el cliente
   get cliente() {
    return this.clienteData.getValue();
  }

  set cliente(nuevoCliente: any) {
    this.clienteData.next(nuevoCliente);
  }

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

  // funcion paralimpiar los datos de los fomularios
  public clearForms(){
    this.cliente = {};
    this.vehiculo = {};
    this.repuestos= {};
  }
}
