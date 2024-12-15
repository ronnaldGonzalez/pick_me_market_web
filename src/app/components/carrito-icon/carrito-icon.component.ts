import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito-icon',
  templateUrl: './carrito-icon.component.html',
  styleUrls: ['./carrito-icon.component.css'],
})
export class CarritoIconComponent implements OnInit, OnDestroy {
  cantidadProductos: number = 0;
  private carritoSubscription: Subscription | undefined;

  constructor(
    private storeService: StoreService,
    private router: Router) {}

  ngOnInit(): void {
    this.carritoSubscription = this.storeService.carritoData.subscribe(carrito => {
      this.cantidadProductos = carrito.length;
    });
  }
  irAlCarrito(): void {
    this.router.navigate(['navigatonLayout', 'carrito'], { skipLocationChange: true });
  }
  ngOnDestroy(): void {
    if (this.carritoSubscription) {
      this.carritoSubscription.unsubscribe();
    }
  }
}
