import { ApiService } from "src/app/services/api.service";
import { Injectable } from '@angular/core';
import { ApiResponse} from '../interfaces/index';

@Injectable({
    providedIn: 'root',  // Proporcionado a nivel de raíz
})
export class SearchHelper {
    constructor(private apiService: ApiService) { }

    async onSearch(orderNumber: any): Promise<ApiResponse> {
        try {
            const response: ApiResponse = await this.apiService.getData('api/product/v1/order', { OrdenNumber: orderNumber }).toPromise();
            return response;
        } catch (err) {
            console.error('Error al recibir la orden:', err);
            throw err;
        }
    }
}