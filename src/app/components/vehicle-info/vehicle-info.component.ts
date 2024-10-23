import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import marcasJson from '../../../assets/json/marcasVehiculos.json';
import { MarcasResponse } from '../../../assets/interfaces/vehiculos.model';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent implements OnInit {
  @Input() vehicleData: any;  // Datos para visualización
  @Input() isEditMode = true; // Controla si el formulario está en modo de edición
  @Output() formSubmitted = new EventEmitter<any>();
  vehicleForm!: FormGroup;
  marcas: any[] = [];
  modelos: string[] = [];

  constructor(private fb: FormBuilder) { }

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
      año: [{ value: '', disabled: !this.isEditMode }, [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]],
      vin: [{ value: '', disabled: !this.isEditMode }, [Validators.required, Validators.pattern(/^[A-HJ-NPR-Z0-9]{15,17}$/)]]
    });

    
    // Si hay datos de visualización, populamos el formulario
    if (this.vehicleData) {
      const selectedMarca = this.marcas.find(marca => marca.id === Number(this.vehicleData.marca));
      this.modelos = selectedMarca ? selectedMarca.modelos : [];
      this.vehicleForm.patchValue(this.vehicleData);
    }

    // Habilitamos o deshabilitamos los campos según el modo de edición
    if (!this.isEditMode) {
      this.vehicleForm.disable();  // Deshabilita los campos en modo de visualización
    } else {
      this.vehicleForm.enable();   // Habilita los campos en modo de edición
      this.vehicleForm.statusChanges.subscribe(status => {
        if (status === 'VALID') {
          this.enviarDatos(); // Enviar datos cuando el formulario sea válido
        }
      });
    }
  }

  enviarDatos() {
    console.log('en enviar datos')
    if (this.vehicleForm.valid) {
      console.log('datos validos')
      this.formSubmitted.emit(this.vehicleForm.value); // Emitir los datos al componente padre
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
    console.log('cargando data')
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
    return this.vehicleForm.get('año');
  }

  get vin() {
    return this.vehicleForm.get('vin');
  }
}
