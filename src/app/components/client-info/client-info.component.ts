import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['',Validators.required],
      correo: ['', [Validators.email]],
      celular: ['',Validators.required]
    });
  }

  ngOnInit(): void {}

  getClientInfo() {
    return this.clientForm.value;
  }

   // Métodos para obtener los controles individuales del formulario
   get nombre() {
    return this.clientForm.get('nombre');
  }

  get direccion() {
    return this.clientForm.get('direccion');
  }

  get correo() {
    return this.clientForm.get('correo');
  }

  get celular() {
    return this.clientForm.get('celular');
  }

}