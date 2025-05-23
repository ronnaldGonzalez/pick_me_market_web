import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../../services/store.service';
import regionesjson from '../../../assets/json/comunasRegiones.json';
import { Region , Comuna} from '../../../assets/interfaces/comunasRegiones.interface';
import { Router } from '@angular/router';
import { Cliente } from 'src/assets/interfaces/client.interface';
@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
// formulario para la informacion del cliente
export class ClientInfoComponent implements OnInit {
  clientForm!: FormGroup;
  regiones: Region[] = [];
  comunas: Comuna[] = [];
  @Input() isEditMode = true;
  constructor(
    private fb: FormBuilder,
    private store: StoreService,
    private router: Router) {}
  
  ngOnInit(): void {
    this.createForm();
    this.loadData();
    if (this.isEditMode) {
      this.clientForm.enable();
    } else {
      const clienteData: Cliente = this.store.searchOrderResults.data.cliente;
      this.comunas = (this.regiones.find(region => region.regionId == clienteData.regionId)?.comunas) || [];
      this.clientForm.patchValue(clienteData);
      this.clientForm.disable();
    }
  }

  onRegionChange(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    const regionId = Number(selectElement.value);
    const selectedRegin = this.regiones.find(region => region.regionId === regionId);
    this.comunas = selectedRegin ? selectedRegin.comunas : [];
    this.clientForm.get('comunaId')?.setValue('');

  }
  saveClienteInfo() {
    console.log('guardando')
    if (this.clientForm.valid) {
      this.store.cliente = this.clientForm.value;
      this.clientForm.reset();
      this.router.navigate(['/carInformation']);
    }
  }
  loadData(){
    this.regiones = regionesjson.regiones;
  }

  createForm() {
    this.clientForm = this.fb.group({
      nombre: [{ value: '', disabled: !this.isEditMode },Validators.required],
      correo_electronico: [{ value: '', disabled: !this.isEditMode }, [Validators.email]],
      celular: [{ value: '', disabled: !this.isEditMode }, Validators.required],
      regionId: [{ value: '', disabled: !this.isEditMode }, Validators.required],
      comunaId: [{ value: '', disabled: !this.isEditMode }, Validators.required]
    });
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