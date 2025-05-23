import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';
import { ApiResponse } from 'src/assets/interfaces';
import { Cliente } from 'src/assets/interfaces/client.interface';
import { Repuesto } from 'src/assets/interfaces/repuesto.interface';
import { UploadOfertRequest } from 'src/assets/interfaces/uploadOfertRequest';
@Component({
    selector: 'app-offer-upload',
    templateUrl: './offer-upload.component.html',
    styleUrls: ['./offer-upload.component.css']
})
export class OfferUploadComponent implements OnInit {
    clientInformation!: Cliente;
    repuestos: Repuesto[] = [];
    ofertaForms: FormGroup[] = [];
    uploadOfertRequest!: UploadOfertRequest;
    searchOrderResults!: ApiResponse;
    constructor(
        private storeService: StoreService,
        private fb: FormBuilder,
        private apiService: ApiService) {

    }
    ngOnInit(): void {
        console.log('cargando datos')

        this.searchOrderResults = this.storeService.searchOrderResults;
        this.clientInformation = this.searchOrderResults.data.cliente;
        this.repuestos = this.searchOrderResults.data.vehiculo.repuestos || [];
        this.createForm();
    }


    callCallenge() {


    }

    onSubmit(form: FormGroup, repuesto: Repuesto) {
        if (form.valid) {
            this.createBodyRequest(form, repuesto)
            this.sendOffer();
        }
    }

    createForm() {
        this.repuestos.forEach(() => {
            this.ofertaForms.push(this.fb.group({
                cantidad: [null, Validators.required],
                valorTotal: [null, Validators.required],
                disponibilidad: ['Inmediata', Validators.required],
                costoEnvio: [null, Validators.required]
            }));
        });
    }
    sendOffer() {
        this.apiService.postData('api/product/v1/offer/post', this.uploadOfertRequest).subscribe({
            next: (response: any) => {
              console.log('respondio bien');
              console.log(response)
            //   this.ordenNumber = response.data?.OrdenNumber;
            //   this.mostrarModal = true;
            //   this.store.hideLoading();
    
              // Mostrar el modal por 3 segundos y luego redirigir
            //   setTimeout(() => this.handleModalClose(), 3000);
            },
            error: (err: any) => {
            //   this.store.hideLoading();
              console.error('Error al enviar la orden:', err);
            }
          });
    }
    createBodyRequest(form: FormGroup, repuesto: Repuesto) {
        this.uploadOfertRequest = {
            orden: {
                orden_id: this.searchOrderResults.OrderId || 0,
                precio_ofertado: form.value.valorTotal,
                tiempo_entrega: "en duro",
                costo_envio: form.value.costoEnvio,
                cantidad: form.value.cantidad,
                clasificacion_id: 0,
                rango_id: 0
            },
            repuesto: {
                repuesto_id: Number(repuesto.repuestoId)
            },
            proveedor: {
                proveedor_id: this.searchOrderResults.proveedor_id || 0
            },
            security: {
                challenge: "177616"
            }
        }
    }
}
