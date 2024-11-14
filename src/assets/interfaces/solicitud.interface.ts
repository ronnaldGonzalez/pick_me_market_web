import { Repuesto } from './repuesto.interface';

export interface SolicitudData {
  idSolicitud: number;
  patente: string;
  marca: string;
  modelo: string;
  año: number;
  vin: string;
  repuestos: Repuesto[];
}
