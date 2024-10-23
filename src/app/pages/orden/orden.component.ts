import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent {
  listaRepuestos: any[] = [];
  vehicleInfoData: any = {};

  constructor( private apiService: ApiService ){}

  onRepuestoAdded(repuesto: any): void {
    this.listaRepuestos.push(repuesto); // Añade el nuevo repuesto a la lista
  }

  guardarInfoVehiculo(data: any) {
    this.vehicleInfoData = data; // Guardar la información de VehicleInfo
  }

  enviarOrden() {
    if (Object.keys(this.vehicleInfoData).length > 0 && this.listaRepuestos.length > 0) {
      const ordenCompleta = {
        ...this.vehicleInfoData,
        repuestos: this.listaRepuestos
      };

      // Llamar al servicio para enviar la orden
      this.apiService.postData('orden',ordenCompleta).subscribe({
        next: (response: any) => {
          console.log('Orden enviada con éxito:', response);
          
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
}
