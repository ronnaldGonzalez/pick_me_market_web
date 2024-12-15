import { SolicitudData } from './solicitud.interface';

export interface ApiResponse {
    status: string;
    message: string;
    data: SolicitudData;
  }
  