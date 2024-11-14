import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { SolicitudData, Repuesto } from 'src/assets/interfaces';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit  {
  vehicleDataToShow: SolicitudData | undefined;
  listaRepuestos: Repuesto[] | undefined

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    const searchOrderResults  = this.storeService.searchOrderResults;
    this.vehicleDataToShow= searchOrderResults.data;
    this.listaRepuestos = this.vehicleDataToShow.repuestos;
  }



}
