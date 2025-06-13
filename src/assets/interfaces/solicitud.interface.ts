import { Vehiculo } from './vehiculo.interface';
import { Cliente } from './client.interface';
export interface SolicitudData {
  vehiculo: Vehiculo;
  cliente: Cliente;
  idSolicitud: number;
}

