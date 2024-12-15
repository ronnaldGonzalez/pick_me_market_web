import { Repuesto } from './repuesto.interface';

export interface SolicitudData {
  vehiculo: Vehiculo;
  cliente: any;
  idSolicitud: number;
}

export interface Vehiculo {
  repuestos: Repuesto[];
  patente: string;
  marca: string; // Usar string si 'marca' es un identificador o descripción, ajustar según tu implementación.
  modelo: string;
  anio: number;
  vin: string;
}

