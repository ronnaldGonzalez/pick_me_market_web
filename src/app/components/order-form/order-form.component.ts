import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  vehicleForm!: FormGroup;
  repuestosList: Array<{
    categoria: string,
    subcategoria: string,
    nombreRepuesto: string,
    fotoUrl: string
  }> = [];

  constructor(private fb: FormBuilder) 
  { }

  ngOnInit(): void {
    this.vehicleForm = this.fb.group({
      patente: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: ['', Validators.required],
      vin: ['', Validators.required],
      repuestoForm: this.fb.group({
        categoria: ['', Validators.required],
        subcategoria: ['', Validators.required],
        nombreRepuesto: ['', Validators.required],
        foto: [null, Validators.required]
      })
    });
  }
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const photoUrl = reader.result as string;
        this.vehicleForm.get('repuestoForm')?.get('foto')?.setValue(photoUrl);
      };
      reader.readAsDataURL(file);
    }
  }
  addRepuesto(): void {
    const repuestoForm = this.vehicleForm.get('repuestoForm')?.value;
    this.repuestosList.push({
      categoria: repuestoForm.categoria,
      subcategoria: repuestoForm.subcategoria,
      nombreRepuesto: repuestoForm.nombreRepuesto,
      fotoUrl: repuestoForm.foto
    }); // Resetear el formulario de repuestos para permitir nuevas entradas 
    this.vehicleForm.get('repuestoForm')?.reset();
  }
  removeRepuesto(index: number): void {
    this.repuestosList.splice(index, 1);
  }
  onSubmit(): void {
    // Manejo del envío del formulario 
  }
}