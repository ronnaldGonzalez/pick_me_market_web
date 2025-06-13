import { Cliente } from "./client.interface";
import { Vehiculo } from "./vehiculo.interface";

export interface ApiResponse {
  OrderId?: number;
  proveedor_id?: number;
  status: number;
  message: string;
  data: {
    cliente: Cliente;
    vehiculo: Vehiculo;
  };
}




