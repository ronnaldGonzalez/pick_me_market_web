import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import marcasJson from '../../../assets/json/marcasVehiculos.json';
import { MarcasResponse } from '../../../assets/interfaces/vehiculos.model';
import { Marca, Vehiculo } from 'src/assets/interfaces';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent implements OnInit {
  @Input() isEditMode = true; // Controla si el formulario está en modo de edición
  public vehicleData!: Vehiculo;
  vehicleForm!: FormGroup;
  marcas: Marca[] = [];
  modelos: string[] = [];
  clientInfo: any = {};

  constructor(private fb: FormBuilder, private store: StoreService) { }

  ngOnInit(): void {
    this.loadData();

    // Inicializa el formulario
    this.vehicleForm = this.fb.group({
      patente: [{ value: '', disabled: !this.isEditMode }, [
        Validators.required,
        Validators.pattern(/^(?:[a-zA-Z]{4}\d{2}|[a-zA-Z]{2}\d{4})$/)
      ]],
      marca: [{ value: '', disabled: !this.isEditMode }, Validators.required],
      modelo: [{ value: '', disabled: !this.isEditMode }, Validators.required],
      anio: [{ value: '', disabled: !this.isEditMode }, [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]],
      vin: [{ value: '', disabled: !this.isEditMode }, [Validators.required, Validators.pattern(/^[A-HJ-NPR-Za-hj-npr-z0-9]{15,17}$/)]]
    });

    // Habilitamos o deshabilitamos los campos según el modo de edición
    if (!this.isEditMode) {
      this.vehicleData = this.store.vehiculo;
      const selectedMarca = this.marcas.find(marca => marca.id === Number(this.vehicleData?.marca));
      this.modelos = selectedMarca ? selectedMarca.modelos : [];
      this.vehicleForm.patchValue(this.vehicleData);
      this.vehicleForm.disable();  // Deshabilita los campos en modo de visualización
    } else {
      this.vehicleForm.enable();   // Habilita los campos en modo de edición
      this.vehicleForm.statusChanges.subscribe(status => {
          this.enviarDatos(status); // Enviar datos cuando el formulario sea válido
      });
    }
  }

  enviarDatos(status: string) {
    if (status === 'VALID') {
    this.store.vehiculo = this.vehicleForm.value
    }else{
      this.store.vehiculo = {};
    }
  }

  onMarcaChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const marcaId = Number(selectElement.value);
    const selectedMarca = this.marcas.find(marca => marca.id === marcaId);
    this.modelos = selectedMarca ? selectedMarca.modelos : [];
    this.vehicleForm.get('modelo')?.setValue(''); // Resetear el modelo
  }

  loadData() {
    this.marcas = (marcasJson as MarcasResponse).marcas;
  }
  // Métodos para obtener los controles individuales del formulario
  get patente() {
    return this.vehicleForm.get('patente');
  }

  get marca() {
    return this.vehicleForm.get('marca');
  }

  get modelo() {
    return this.vehicleForm.get('modelo');
  }

  get anio() {
    return this.vehicleForm.get('anio');
  }

  get vin() {
    return this.vehicleForm.get('vin');
  }
}
