import { Component, OnInit } from '@angular/core';
import { StoreService} from '../../services/store.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  spinnerImage = 'assets/icons/fast.png'; 
  loadingMessage = 'Procesando tu solicitud...';
  isLoading: boolean = false;

  constructor(private storeService: StoreService) {}
  ngOnInit(): void {
    this.storeService.loading$.subscribe((loading) => {
      this.isLoading = loading;
    });
  }

}
