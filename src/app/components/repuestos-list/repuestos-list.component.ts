import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repuestos-list',
  templateUrl: './repuestos-list.component.html',
  styleUrls: ['./repuestos-list.component.css']
})
export class RepuestosListComponent {
  @Input() listaRepuestos: Array<{
    categoria: string;
    subcategoria: string;
    nombreRepuesto: string;
    foto: string;
  }> = [];

  @Input() isViewMode: boolean = false;

  removeRepuesto(index: number): void {
    this.listaRepuestos.splice(index, 1);
  }
  onVerOferta(repuesto: any){
    console.log(repuesto)
  }
}
