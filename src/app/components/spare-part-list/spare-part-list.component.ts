import { Component, Input, OnInit } from '@angular/core';
import { Repuesto } from 'src/assets/interfaces/repuesto.interface';
import { StoreService} from '../../services/store.service';
@Component({
  selector: 'app-spare-part-list',
  templateUrl: './spare-part-list.component.html',
  styleUrls: ['./spare-part-list.component.css']
})
export class SparePartListComponent implements OnInit {
  selectedRepuestoId: number | undefined | null = null;
  listaRepuestos: Array<Repuesto> = [];
  @Input() isViewMode: boolean = false;

  constructor(
    private store: StoreService)
     { }

  ngOnInit(): void {
    if(this.isViewMode){
      this.listaRepuestos = this.store.searchOrderResults.data.vehiculo.repuestos ||[];
    }else {
      this.store.repuestosListData$.subscribe(lista => {
        this.listaRepuestos = lista;
      })
    }
    
    
  }

  removeRepuesto(index: number): void {
    this.listaRepuestos?.splice(index, 1);
    this.store.repuestos = this.listaRepuestos;
  }


  onVerOferta(repuesto: Repuesto){
    this.selectedRepuestoId = repuesto.repuestoId; 
  }

  cerrarOfertas() {
    this.selectedRepuestoId = null;
  }

}
