import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/assets/interfaces/client.interface';
import { Vehiculo } from 'src/assets/interfaces/vehiculo.interface';
import { Repuesto } from 'src/assets/interfaces/repuesto.interface';
@Component({
  selector: 'app-spare-part-information-form',
  templateUrl: './spare-part-information-form.component.html',
  styleUrls: ['./spare-part-information-form.component.css']
})
export class SparePartInformationFormComponent {
  mostrarModal: boolean = false;
  ordenNumber: string = '';


  constructor(
    private store: StoreService,
    private apiService: ApiService,
    private router: Router) { }

  isNotEmpty(obj: object): boolean {
    return Object.keys(obj).length > 0;
  }



  submitOrder() {
    console.log('enviando orden')
    this.store.showLoading();
    const clientInformation: Cliente = this.store.cliente;
    const carInformation: Vehiculo = this.store.vehiculo;
    const sparePartsInformation: Repuesto[] = this.store.repuestos;
    if ( this.isNotEmpty(carInformation) && this.isNotEmpty(clientInformation) && this.isNotEmpty(sparePartsInformation) ) {
      const ordenCompleta = {
        cliente: clientInformation,
        vehiculo: {
          ...carInformation,
          repuestos: sparePartsInformation
        }
      };


      this.apiService.postData('api/product/v1/order', ordenCompleta).subscribe({
        next: (response: any) => {
          console.log('respondio bien')
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
    }
  }

  handleModalClose() {
    this.mostrarModal = false;
    this.router.navigate(['/']); // Redirigir al home
  }

}
