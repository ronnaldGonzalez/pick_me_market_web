import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private searchOrderResultsData = new BehaviorSubject<any>({}); // Puedes definir un estado inicial aquí


  set searchOrderResults (newState: any) {
    this.searchOrderResultsData.next(newState);
  }

  get searchOrderResults() {
    return this.searchOrderResultsData.getValue();
  }
}
