import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent {
  listaRepuestos: any[] = [];
  vehicleInfoData: any = {};
  disableButtonSubmit = true;
  mostrarModal: boolean = false;
  ordenNumber: string = '';

  constructor(private apiService: ApiService,
    private router: Router) { }

  onRepuestoAdded(repuesto: any): void {
    this.listaRepuestos.push(repuesto); // Añade el nuevo repuesto a la lista
  }

  guardarInfoVehiculo(data: any) {
    this.vehicleInfoData = data; // Guardar la información de VehicleInfo
    this.disableButtonSubmit = false;
  }

  enviarOrden() {
    if (Object.keys(this.vehicleInfoData).length > 0 && this.listaRepuestos.length > 0) {
      const ordenCompleta = {
        ...this.vehicleInfoData,
        repuestos: this.listaRepuestos
      };

      // Llamar al servicio para enviar la orden
      this.apiService.postData('api/orden', ordenCompleta).subscribe({
        next: (response: any) => {
          console.log('Orden enviada con éxito:', response);
          this.ordenNumber = response.data?.OrdenNumber;
          this.mostrarModal = true;
          // Mostrar el modal por 3 segundos y luego redirigir
          setTimeout(() => this.handleModalClose(), 3000);

        },
        error: (err: any) => {
          console.error('Error al enviar la orden:', err);
        },
        complete: () => {
          console.log('Petición completada.');
        }
      });
    } else {
      console.log('Falta información para enviar la orden.');
    }
  }

  handleModalClose() {
    this.mostrarModal = false;
    this.router.navigate(['/']); // Redirigir al home
  }
}
