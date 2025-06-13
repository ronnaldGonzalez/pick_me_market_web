import { Repuesto } from "./repuesto.interface";

export interface Vehiculo {
    patente: string;
    marca: string;
    modelo: string;
    anio: number;
    vin: string;
    repuestos?: Repuesto[];
  }