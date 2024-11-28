import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../../services/store.service';
import {  Repuesto, Vehiculo } from 'src/assets/interfaces';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit, OnDestroy  {
  vehicleDataToShow: Vehiculo | undefined;
  listaRepuestos: Repuesto[] | undefined

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    const searchOrderResults  = this.store.searchOrderResults;
    this.store.vehiculo = searchOrderResults.data.vehiculo;
    this.store.repuestos = searchOrderResults.data.vehiculo.repuestos;
    this.store.cliente = searchOrderResults.data.cliente;
  }

  ngOnDestroy(): void {
    this.store.clearForms();
  }



}
