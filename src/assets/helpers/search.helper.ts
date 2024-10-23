import { ApiService } from "src/app/services/api.service";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',  // Proporcionado a nivel de raíz
  })
export class SearchHelper {
    constructor(private apiService: ApiService) { }

    async onSearch(orderNumber: any): Promise<any> {
        if (orderNumber) {
            try {
                const response = await this.apiService.getData('orden', { id: orderNumber }).toPromise();
                console.log('Orden enviada con éxito:', response);
                return response;
            } catch (err) {
                console.error('Error al enviar la orden:', err);
                throw err; // Puedes lanzar el error o manejarlo de otra manera
            }
        }
        return null; // Retornar null si no hay número de orden
    }
}