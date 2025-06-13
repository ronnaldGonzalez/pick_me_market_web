import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiResponse } from 'src/assets/interfaces/api-response.interface';
import { Cliente } from 'src/assets/interfaces/client.interface';
import { Vehiculo } from 'src/assets/interfaces/vehiculo.interface';
import { Repuesto } from 'src/assets/interfaces/repuesto.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {

private getEmptyCliente(): Cliente {
  return {
    clienteId: 0,
    nombre: '',
    correo_electronico: '',
    celular: '',
    regionId: 0,
    comunaId: 0
  };
}

private getEmptyVehiculo(): Vehiculo {
  return {
    patente: '',
    marca: '',
    modelo: '',
    anio: 0,
    vin: ''
  };
}

private getEmptyRepuesto(): Repuesto {
  return {
    repuestoId: 0,
    categoria: '',
    subcategoria: '',
    nombreRepuesto: '',
    foto: '',
    ofertas: []
  };
}

private getEmptySearchOrderResultData():ApiResponse {
  return {
    status: 0,
    message: '',
    data: {
      cliente: {
        clienteId: 0,
        nombre: '',
        correo_electronico: '',
        celular: '',
        regionId: 0,
        comunaId: 0
      },
      vehiculo: {
        patente: '',
        marca: '',
        modelo: '',
        anio: 0,
        vin: '',
        repuestos: []
      }
    }
  }
}


  // VARIABLES
  private clienteData = new BehaviorSubject<Cliente >(this.getEmptyCliente());
  private vehicleData = new BehaviorSubject<Vehiculo >(this.getEmptyVehiculo());
  private repuestosListData = new BehaviorSubject<Repuesto[] >([this.getEmptyRepuesto()]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private searchOrderResultsData = new BehaviorSubject<ApiResponse >(this.getEmptySearchOrderResultData());



  public carritoData = new BehaviorSubject<any[]>(this.getCarritoFromStorage()); // Inicializa con los datos de localStorage
  

  // observables
  clienteData$ = this.clienteData.asObservable();
  vehicleData$ = this.vehicleData.asObservable();
  repuestosListData$ = this.repuestosListData.asObservable();
  loading$ = this.loadingSubject.asObservable();

  // Getters y setters para el cliente
  get cliente(): Cliente {
    return this.clienteData.getValue();
  }

  set cliente(nuevoCliente: Cliente) {
    this.clienteData.next(nuevoCliente);
  }

  // Getters y setters para el vehiculo
  get vehiculo(): Vehiculo {
    return this.vehicleData.getValue();
  }

  set vehiculo(nuevoVehiculo: Vehiculo  ) {
    this.vehicleData.next(nuevoVehiculo);
  }

   // Getters y setters para repuestos
   get repuestos(): Repuesto[] {
    return this.repuestosListData.getValue();
  }

  set repuestos(newRepuestosListData: Repuesto[]) {
    this.repuestosListData.next(newRepuestosListData);
  }

  // estado loading
  showLoading() {
    this.loadingSubject.next(true);
  }

  hideLoading() {
    this.loadingSubject.next(false);
  }
 
// resultado consulta por id de solicitud
  set searchOrderResults(newState: ApiResponse ) {
    this.searchOrderResultsData.next(newState);
  }

  get searchOrderResults(): ApiResponse  {
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
    this.cliente = this.getEmptyCliente();
    this.vehiculo = this.getEmptyVehiculo();
    this.repuestos= [this.getEmptyRepuesto()];
  }
}
