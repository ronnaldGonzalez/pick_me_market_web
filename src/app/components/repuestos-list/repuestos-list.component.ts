import { Component, Input } from '@angular/core';
import { Repuesto } from 'src/assets/interfaces/repuesto.interface';

@Component({
  selector: 'app-repuestos-list',
  templateUrl: './repuestos-list.component.html',
  styleUrls: ['./repuestos-list.component.css']
})
export class RepuestosListComponent {
  @Input() listaRepuestos: Array<Repuesto> | undefined= [];
  selectedRepuestoId: number | undefined | null = null;
  @Input() isViewMode: boolean = false;

  removeRepuesto(index: number): void {
    this.listaRepuestos?.splice(index, 1);
  }
  onVerOferta(repuesto: Repuesto){
    this.selectedRepuestoId = repuesto.idProducto;
  }

  cerrarOfertas() {
    this.selectedRepuestoId = null;
  }
}
