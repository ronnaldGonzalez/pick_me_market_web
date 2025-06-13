import { Component, OnInit  } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { ApiResponse } from 'src/assets/interfaces';
@Component({
  selector: 'app-client-order-detail',
  templateUrl: './client-order-detail.component.html',
  styleUrls: ['./client-order-detail.component.css']
})
export class ClientOrderDetailComponent implements OnInit {

  clientOrdenDetail!: ApiResponse | {};
  constructor(private storeService:StoreService){ }

  ngOnInit(): void {
    console.log('en eldetail')
    this.clientOrdenDetail = this.storeService.searchOrderResults;
  }

}
