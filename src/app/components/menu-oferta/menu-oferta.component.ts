import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { Oferta} from '../../../assets/interfaces/index'

@Component({
  selector: 'app-menu-oferta',
  templateUrl: './menu-oferta.component.html',
  styleUrls: ['./menu-oferta.component.css']
})
export class MenuOfertaComponent {
  @Input() ofertas: Oferta[] | undefined= [];
  @Output() volver = new EventEmitter<void>();

  constructor(private carritoService: CarritoService) {}

  agregarAlCarro(oferta: any) {
    this.carritoService.agregarAlCarrito(oferta);
  }

}
