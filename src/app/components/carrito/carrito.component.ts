import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];
  private carritoSubscription: Subscription | undefined;

  constructor(
    private storeService: StoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Simular datos estáticos para probar
    // this.carrito = [
    //   {
    //     idOferta: 1,
    //     ofertante: 'ofertante1',
    //     precio: 1234,
    //     tiempoEntrega: '2 dias',
    //     comuna: 'macul',
    //     costoEnvio: 20000,
    //   },
    // ];

    // Descomentar esta sección si estás usando datos del servicio
    this.carritoSubscription = this.storeService.carritoData.subscribe((carrito: any[]) => {
      this.carrito = carrito;
    });
  }

  ngOnDestroy(): void {
    if (this.carritoSubscription) {
      this.carritoSubscription.unsubscribe();
    }
  }

  eliminarDelCarrito(oferta: any): void {
    const carritoActual = this.storeService.carrito;
    this.storeService.carrito = carritoActual.filter((item: any) => item !== oferta);
  }

  vaciarCarrito(): void {
    this.storeService.carrito = [];
    this.carrito = [];
  }


  calcularSubtotal(): number {
    return this.carrito.reduce((total, item) => total + item.precio, 0);
  }
  
  calcularCostoEnvio(): number {
    return this.carrito.reduce((total, item) => total + item.costoEnvio, 0);
  }
  
  calcularTotal(): number {
    return this.calcularSubtotal() + this.calcularCostoEnvio();
  }
  
  irAPagar(): void {
    // Navegar a la página de pago
    this.router.navigate(['navigatonLayout', 'checkout']);
  }
  
}
