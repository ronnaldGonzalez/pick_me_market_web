import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../../services/store.service';
import regionesjson from '../../../assets/json/comunasRegiones.json';
import { Region } from '../../../assets/interfaces/comunasRegiones.interface';
@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})

export class ClientInfoComponent implements OnInit {
  regiones: Region[] = [];
  clientForm!: FormGroup;
  comunas: string[] = [];
  @Input() isEditMode = true;

  constructor(private fb: FormBuilder, private store: StoreService) {
   
 
  }
  ngOnInit(): void {
    this.clientForm = this.fb.group({
      nombre: [{ value: '', disabled: !this.isEditMode },Validators.required],
      // direccion: [{ value: '', disabled: !this.isEditMode },Validators.required],
      correo_electronico: [{ value: '', disabled: !this.isEditMode }, [Validators.email]],
      celular: [{ value: '', disabled: !this.isEditMode }, Validators.required],
      region: [{ value: '', disabled: !this.isEditMode }, Validators.required],
      comuna: [{ value: '', disabled: !this.isEditMode }, Validators.required]
    });
    this.regiones = regionesjson.regiones;
    if (!this.isEditMode) {
     
      const clienteData = this.store.cliente;
      this.comunas = (this.regiones.find(region => region.NombreRegion == clienteData.region)?.comunas) || [];
      this.clientForm.patchValue(clienteData);
      this.clientForm.disable();  // Deshabilita los campos en modo de visualización
    } else {
      this.clientForm.enable();   // Habilita los campos en modo de edición
      
      this.clientForm.get('region')?.valueChanges.subscribe((region: string) => {
        this.updateComunas(region);
      });
    }
  }

  updateComunas(regionName: string): void {
    const region = this.regiones.find(r => r.NombreRegion === regionName);
    if (region) {
      this.comunas = region.comunas;
      this.clientForm.get('comuna')?.reset();
    }
  }

  onInputChange() {
    if (this.clientForm.valid) {
      this.store.cliente = this.clientForm.value;
    } else {
      this.store.cliente = {}
    }
  }

  get nombre() {
    return this.clientForm.get('nombre');
  }

  get direccion() {
    return this.clientForm.get('direccion');
  }

  get correo_electronico() {
    return this.clientForm.get('correo_electronico');
  }

  get celular() {
    return this.clientForm.get('celular');
  }

}