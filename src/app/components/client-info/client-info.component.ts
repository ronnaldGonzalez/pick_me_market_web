import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../../services/store.service';
import regionesjson from '../../../assets/json/comunasRegiones.json';
import { Region , Comuna} from '../../../assets/interfaces/comunasRegiones.interface';
@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})

export class ClientInfoComponent implements OnInit {
  regiones: Region[] = [];
  clientForm!: FormGroup;
  comunas: Comuna[] = [];
  @Input() isEditMode = true;

  constructor(private fb: FormBuilder, private store: StoreService) {
   
 
  }
  ngOnInit(): void {
    this.clientForm = this.fb.group({
      nombre: [{ value: '', disabled: !this.isEditMode },Validators.required],
      // direccion: [{ value: '', disabled: !this.isEditMode },Validators.required],
      correo_electronico: [{ value: '', disabled: !this.isEditMode }, [Validators.email]],
      celular: [{ value: '', disabled: !this.isEditMode }, Validators.required],
      regionId: [{ value: '', disabled: !this.isEditMode }, Validators.required],
      comunaId: [{ value: '', disabled: !this.isEditMode }, Validators.required]
    });
    this.regiones = regionesjson.regiones;
    if (!this.isEditMode) {
     
      const clienteData = this.store.cliente;
      this.comunas = (this.regiones.find(region => region.regionId == clienteData.regionId)?.comunas) || [];
      console.log('this.comunas',this.comunas)
      console.log('cliente data',clienteData)
      // revisar por que no carga la comuna
      this.clientForm.patchValue(clienteData);
      this.clientForm.disable();  // Deshabilita los campos en modo de visualización
    } else {
      this.clientForm.enable();   // Habilita los campos en modo de edición
      
      this.clientForm.get('regionId')?.valueChanges.subscribe((region: number) => {
        this.updateComunas(region);
      });
    }
  }

  updateComunas(regionName: number): void {
    console.log('region',regionName)
    const region = this.regiones.find(r => r.regionId === Number(regionName));
    if (region) {
      this.comunas = region.comunas;
      console.log('comunas',this.comunas)
      this.clientForm.get('comunaId')?.reset();
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