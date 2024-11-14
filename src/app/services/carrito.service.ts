import { Injectable } from '@angular/core';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  constructor(private storeService: StoreService) {}

  agregarAlCarrito(oferta: any): void {
    const carritoActual = this.storeService.carrito;
    this.storeService.carrito = [...carritoActual, oferta]; // Actualiza el carrito en el StoreService
  }

  eliminarDelCarrito(oferta: any): void {
    const carritoActual = this.storeService.carrito;
    this.storeService.carrito = carritoActual.filter(item => item !== oferta); // Filtra el carrito
  }

  obtenerCarrito(): any[] {
    return this.storeService.carrito; // Retorna el carrito del StoreService
  }

  vaciarCarrito(): void {
    this.storeService.carrito = []; // Vacía el carrito
  }
}
