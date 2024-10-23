import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit  {
  vehicleDataToShow: any;
  listaRepuestos: any

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    const searchOrderResults  = this.storeService.searchOrderResults;
    console.log('searchOrderResults',searchOrderResults)
    this.vehicleDataToShow= searchOrderResults.data;
    this.listaRepuestos = this.vehicleDataToShow.repuestos;
  }



}
