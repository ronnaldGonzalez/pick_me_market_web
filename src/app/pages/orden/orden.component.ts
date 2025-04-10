import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { StoreService} from '../../services/store.service';
import { combineLatest, Subscription } from 'rxjs';
@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  listaRepuestos: any[] = [];
  vehicleInfoData: any = {};
  clientInfoData: any = {};
  disableButtonSubmit = true;
  mostrarModal: boolean = false;
  ordenNumber: string = '';


  constructor(
    private apiService: ApiService,
    private router: Router,
    private store: StoreService)
     { }

  ngOnInit(): void {
    this.subscription = combineLatest([
      this.store.clienteData$,
      this.store.vehicleData$,
      this.store.repuestosListData$
    ]).subscribe(([cliente, vehiculo, repuestosList]) => {
      if(cliente && vehiculo && repuestosList ){
        this.guardarFormlarios();
      }
    });
  }


  guardarFormlarios() {
    this.clientInfoData = this.store.cliente;
    this.vehicleInfoData = this.store.vehiculo;
    this.listaRepuestos = this.store.repuestos
    this.disableButtonSubmit = false;
  }

  enviarOrden() {
    console.log('enviando orden')
    this.store.showLoading();
    if (Object.keys(this.vehicleInfoData).length > 0 && this.listaRepuestos.length > 0) {
      const ordenCompleta = {
        cliente: this.clientInfoData,
        vehiculo: {
          ...this.vehicleInfoData,
          repuestos: this.listaRepuestos
        }
      };
      

      this.apiService.postData('api/product/v1/order', ordenCompleta).subscribe({
        next: (response: any) => {
          this.ordenNumber = response.data?.OrdenNumber;
          this.mostrarModal = true;
          this.store.hideLoading();

          // Mostrar el modal por 3 segundos y luego redirigir
          setTimeout(() => this.handleModalClose(), 3000);
        },
        error: (err: any) => {
          this.store.hideLoading();
          console.error('Error al enviar la orden:', err);
        }
      });
    } else {
      this.store.hideLoading();
      console.log('Falta información para enviar la orden.');
    }
  }

  handleModalClose() {
    this.mostrarModal = false;
    this.router.navigate(['/']); // Redirigir al home
  }

  ngOnDestroy(): void {
    // Desuscribir para evitar memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.store.clearForms();
  }
}
