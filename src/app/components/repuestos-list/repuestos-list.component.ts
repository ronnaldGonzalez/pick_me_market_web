import { Component, Input, OnInit } from '@angular/core';
import { Repuesto } from 'src/assets/interfaces/repuesto.interface';
import { StoreService} from '../../services/store.service';
@Component({
  selector: 'app-repuestos-list',
  templateUrl: './repuestos-list.component.html',
  styleUrls: ['./repuestos-list.component.css']
})
export class RepuestosListComponent implements OnInit {
  selectedRepuestoId: number | undefined | null = null;
  listaRepuestos: Array<Repuesto> = [];
  @Input() isViewMode: boolean = false;

  constructor(
    private store: StoreService)
     { }

  ngOnInit(): void {
    this.store.repuestosListData$.subscribe(lista => {
      this.listaRepuestos = lista;
    })
    
  }

  removeRepuesto(index: number): void {
    this.listaRepuestos?.splice(index, 1);
    this.store.repuestos = this.listaRepuestos;
  }


  onVerOferta(repuesto: Repuesto){
    this.selectedRepuestoId = repuesto.idProducto;
  }

  cerrarOfertas() {
    this.selectedRepuestoId = null;
  }

}
