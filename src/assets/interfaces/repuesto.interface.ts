import { Oferta } from './oferta.interface';

export interface Repuesto {
  repuestoId: number;
  categoria: string;
  subcategoria: string;
  nombreRepuesto: string;
  foto: string;
  ofertas: Oferta[];
}