import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import marcasJson from '../../../assets/json/marcasVehiculos.json';
import { MarcasResponse } from '../../../assets/interfaces/marcas.interface';
import { Marca } from 'src/assets/interfaces';
import { Vehiculo } from 'src/assets/interfaces/vehiculo.interface';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent implements OnInit {
  vehicleForm!: FormGroup;
  marcas: Marca[] = [];
  modelos: string[] = [];
  @Input() isEditMode = true;

  constructor(
    private fb: FormBuilder,
    private store: StoreService,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.loadData();
    if (this.isEditMode) {
      this.vehicleForm.enable();
    } else {
      const vehicleData: Vehiculo = this.store.searchOrderResults.data.vehiculo;
      const selectedMarca = this.marcas.find(marca => marca.id === Number(vehicleData?.marca));
      this.modelos = selectedMarca ? selectedMarca.modelos : [];
      this.vehicleForm.patchValue(vehicleData);
      this.vehicleForm.disable();
    }
  }

  onMarcaChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const marcaId = Number(selectElement.value);
    const selectedMarca = this.marcas.find(marca => marca.id === marcaId);
    this.modelos = selectedMarca ? selectedMarca.modelos : [];
    this.vehicleForm.get('modelo')?.setValue(''); // Resetear el modelo
  }

  saveCarInfo() {
    console.log('cardInfo')
    if (this.vehicleForm.valid) {
      this.store.vehiculo = this.vehicleForm.value
      this.vehicleForm.reset();
      this.router.navigate(['/sparePartInformation']);
    }
  }

  loadData() {
    this.marcas = (marcasJson as MarcasResponse).marcas;
  }

  createForm() {
    this.vehicleForm = this.fb.group({
      patente: [{ value: '', disabled: !this.isEditMode }, [
        Validators.required,
        Validators.pattern(/^(?:[a-zA-Z]{4}\d{2}|[a-zA-Z]{2}\d{4})$/)
      ]],
      marca: [{ value: '', disabled: !this.isEditMode }, Validators.required],
      modelo: [{ value: '', disabled: !this.isEditMode }, Validators.required],
      anio: [{ value: '', disabled: !this.isEditMode }, [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]],
      vin: [{ value: '', disabled: !this.isEditMode }, [Validators.required, Validators.pattern(/^[A-HJ-NPR-Za-hj-npr-z0-9]{17}$/)]]
    });
  }

  onVinInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const rawValue = input.value.toUpperCase().slice(0, 17); // Limita a 17 y pasa a mayúscula
    this.vehicleForm.get('vin')?.setValue(rawValue, { emitEvent: false });
  }

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
